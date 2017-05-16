package com.bitnami.wordpress.service;

import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.AmazonEC2ClientBuilder;
import com.amazonaws.services.ec2.model.*;
import com.bitnami.wordpress.model.entity.Configuration;
import com.bitnami.wordpress.model.entity.Instance;
import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.provider.CustomCredentialProvider;
import com.bitnami.wordpress.repository.InstanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;

import javax.persistence.Basic;
import javax.transaction.Transactional;
import java.util.Optional;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class AWSService {

    @Autowired
    private IConfigurationService configurationService;

    @Autowired
    private InstanceService instanceRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private TaskExecutor executor;

    @Transactional
    public void launchImage(User user, String instanceName, long configurationId ){
        Configuration configuration = configurationService.getConfigurationById(configurationId);

        //@TODO Move this to an autowired variable
        AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(user))
                .withRegion(configuration.getRegion())
                .build();

        RunInstancesRequest runInstancesRequest = new RunInstancesRequest()
                .withImageId(configuration.getAmiIdentifier())
                .withInstanceType(configuration.getInstanceType())
                .withMaxCount(1)
                .withMinCount(1);

        RunInstancesResult responseResult = ec2.runInstances(runInstancesRequest);
        String reservationId = responseResult.getReservation().getReservationId();

        com.amazonaws.services.ec2.model.Instance createdInstance =
                responseResult.getReservation().getInstances()
                        .stream()
                        .findFirst()
                        .orElse(null);

        String instanceIdentifier = createdInstance.getInstanceId();

        Instance instance = new Instance(reservationId, instanceIdentifier, instanceName,
                createdInstance.getState().getName(), createdInstance.getPublicDnsName(), configuration);

        instanceRepository.save(instance);
        user.setInstance(instance);
        userService.save(user);
    }

    public void stopInstance(User user){
        AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(user))
                .withRegion(user.getInstance().getConfiguration().getRegion())
                .build();
        StopInstancesRequest stopInstancesRequest = new StopInstancesRequest()
                .withInstanceIds(user.getInstance().getInstanceIdentifier());


        executor.execute(() ->
                {
                    ec2.stopInstances(stopInstancesRequest);
                });

    }

    public void startInstance(User user){
        AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(user))
                .withRegion(user.getInstance().getConfiguration().getRegion())
                .build();

        StartInstancesRequest startInstancesRequest = new StartInstancesRequest()
                .withInstanceIds(user.getInstance().getInstanceIdentifier());

        executor.execute(() ->
        {
            ec2.startInstances(startInstancesRequest);
        });
    }

    @Transactional
    public void terminateInstance(User user){
        AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(user))
                .withRegion(user.getInstance().getConfiguration().getRegion())
                .build();

        TerminateInstancesRequest terminateInstancesRequest = new TerminateInstancesRequest()
                .withInstanceIds(user.getInstance().getInstanceIdentifier());

        executor.execute(() ->
        {
            ec2.terminateInstances(terminateInstancesRequest);
        });

        Instance instance = user.getInstance();
        user.setInstance(null);
        instanceRepository.delete(instance.getId());
        userService.save(user);
    }

    @Transactional
    public void restartInstance(User user){
        AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(user))
                .withRegion(user.getInstance().getConfiguration().getRegion())
                .build();

        RebootInstancesRequest  rebootInstancesRequest = new RebootInstancesRequest ()
                .withInstanceIds(user.getInstance().getInstanceIdentifier());

        //@TODO Remove executor
        executor.execute(() ->
        {
            ec2.rebootInstances(rebootInstancesRequest);
        });
    }

    @Transactional
    public com.amazonaws.services.ec2.model.Instance getAWSInstance(User user){AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(user))
                .withRegion(user.getInstance().getConfiguration().getRegion())
                .build();

        DescribeInstancesRequest request = new DescribeInstancesRequest()
                .withInstanceIds(user.getInstance().getInstanceIdentifier());

        DescribeInstancesResult response = ec2.describeInstances(request);

        Reservation currentReservation = response.getReservations()
                .stream()
                .filter((reservation -> reservation.getReservationId().equals(user.getInstance().getReservationId())))
                .findFirst().orElse(null);

        return currentReservation.getInstances()
                .stream()
                .filter( (instance) -> instance.getInstanceId().equals(user.getInstance().getInstanceIdentifier()) )
                .findFirst()
                .orElse(null);
    }
}
