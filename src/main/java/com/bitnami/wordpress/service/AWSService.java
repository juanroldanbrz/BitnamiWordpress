package com.bitnami.wordpress.service;

import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.model.*;
import com.amazonaws.services.ec2.model.InstanceStatus;
import com.bitnami.wordpress.controller.API.APIControllerAdvice;
import com.bitnami.wordpress.model.*;
import com.bitnami.wordpress.model.entity.Configuration;
import com.bitnami.wordpress.model.entity.Instance;
import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.provider.AWSClientProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AWSService {

    private static final String INITIAL_STATUS = "Initializing";

    @Autowired
    private IConfigurationService configurationService;

    @Autowired
    private InstanceService instanceRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private TaskExecutor executor;

    @Autowired
    private AWSClientProvider awsClientProvider;

    private static final Logger logger = LoggerFactory.getLogger(AWSService.class);


    @Transactional
    public void launchImage(String instanceName, long configurationId ){
        Configuration configuration = configurationService.getConfigurationById(configurationId);

        AmazonEC2 ec2 = awsClientProvider.createEC2Client();

        RunInstancesRequest runInstancesRequest = new RunInstancesRequest()
                .withImageId(configuration.getAmiIdentifier())
                .withInstanceType(configuration.getInstanceType())
                .withMaxCount(1)
                .withMinCount(1)
                .withSecurityGroupIds(configuration.getSecurityGroupId());

        User user = userService.getLoggedUser();

        try {
            RunInstancesResult responseResult = ec2.runInstances(runInstancesRequest);
            String reservationId = responseResult.getReservation().getReservationId();
            com.amazonaws.services.ec2.model.Instance createdInstance =
                    responseResult.getReservation().getInstances()
                            .stream()
                            .findFirst()
                            .orElse(null);

            String instanceIdentifier = createdInstance.getInstanceId();

            Instance instance = new Instance(reservationId, instanceIdentifier, instanceName,
                    createdInstance.getState().getName(), INITIAL_STATUS,
                    createdInstance.getPublicDnsName(), configuration);

            instanceRepository.save(instance);
            user.setInstance(instance);
            userService.save(user);

            String toLog = String.format("launchImage: InstanceName <%s>, configurationId <%d>, newInstanceId <%s>"
                    ,instanceName, configurationId, instance.getInstanceIdentifier());

            logger.debug(toLog);

        } catch (AmazonEC2Exception toPropagate) {
            String toLog = String.format("launchImage>newInstance: UserID<%d>", user.getId());
            logger.error(toLog);
        }

    }

    public void stopInstance(Instance instance){
        AmazonEC2 ec2 = awsClientProvider.createEC2Client();

        StopInstancesRequest stopInstancesRequest = new StopInstancesRequest()
                .withInstanceIds(instance.getInstanceIdentifier());

        executor.execute(() ->
                {
                    ec2.stopInstances(stopInstancesRequest);

                    String toLog = String.format("stopInstance: Instance <%d>, AWSInstance <%s>", instance.getId(),
                            instance.getInstanceIdentifier());

                    logger.debug(toLog);
                });
    }

    public void startInstance(Instance instance){
        AmazonEC2 ec2 = awsClientProvider.createEC2Client();

        StartInstancesRequest startInstancesRequest = new StartInstancesRequest()
                .withInstanceIds(instance.getInstanceIdentifier());

        executor.execute(() ->
        {
            ec2.startInstances(startInstancesRequest);

            String toLog = String.format("startInstance: Instance <%d>, AWSInstance <%s>", instance.getId(),
                    instance.getInstanceIdentifier());

            logger.debug(toLog);
        });
    }

    @Transactional
    public void terminateInstance(Instance instance){
        AmazonEC2 ec2 = awsClientProvider.createEC2Client();

        TerminateInstancesRequest terminateInstancesRequest = new TerminateInstancesRequest()
                .withInstanceIds(instance.getInstanceIdentifier());

        executor.execute(() ->
        {
            ec2.terminateInstances(terminateInstancesRequest);

            String toLog = String.format("terminateInstance: Instance <%d>, AWSInstance <%s>", instance.getId(),
                    instance.getInstanceIdentifier());

            logger.debug(toLog);
        });

        User user = userService.getLoggedUser();
        user.setInstance(null);
        userService.save(user);
        instanceRepository.delete(instance.getId());
    }

    @Transactional
    public void restartInstance(Instance instance){
        AmazonEC2 ec2 = awsClientProvider.createEC2Client();

        RebootInstancesRequest  rebootInstancesRequest = new RebootInstancesRequest ()
                .withInstanceIds(instance.getInstanceIdentifier());

        executor.execute(() ->
        {
            ec2.rebootInstances(rebootInstancesRequest);

            String toLog = String.format("restartInstance: Instance <%d>, AWSInstance <%s>", instance.getId(),
                    instance.getInstanceIdentifier());

            logger.debug(toLog);
        });
    }

    public String getAWSInstanceStatus(Instance instance){
        AmazonEC2 ec2 = awsClientProvider.createEC2Client();
        DescribeInstanceStatusRequest statusRequest =
                new DescribeInstanceStatusRequest()
                        .withInstanceIds(instance.getInstanceIdentifier());

        DescribeInstanceStatusResult response =
                ec2.describeInstanceStatus(statusRequest);

        InstanceStatus status = response.getInstanceStatuses().stream()
                .filter( (currentInstance) -> currentInstance.getInstanceId().equals(
                        instance.getInstanceIdentifier()) )
                .findFirst()
                .orElse(null);

        if(status != null){
            return status.getInstanceStatus().getStatus();
        }

        String toLog = String.format("getAWSInstanceStatus: Instance <%d>, AWSInstance <%s>", instance.getId(),
                instance.getInstanceIdentifier());

        logger.debug(toLog);

        return "";
    }

    @Transactional
    public com.amazonaws.services.ec2.model.Instance getAWSInstance(Instance instance){
        AmazonEC2 ec2 = awsClientProvider.createEC2Client();

        DescribeInstancesRequest request = new DescribeInstancesRequest()
                .withInstanceIds(instance.getInstanceIdentifier());

        DescribeInstancesResult response = ec2.describeInstances(request);

        Reservation currentReservation = response.getReservations()
                .stream()
                .filter((reservation -> reservation.getReservationId().equals(instance.getReservationId())))
                .findFirst().orElse(null);

        String toLog = String.format("getAWSInstance: Instance <%d>, AWSInstance <%s>", instance.getId(),
                instance.getInstanceIdentifier());

        logger.debug(toLog);

        return currentReservation.getInstances()
                .stream()
                .filter( (currentInstance) -> currentInstance.getInstanceId().equals(instance.getInstanceIdentifier()) )
                .findFirst()
                .orElse(null);
    }

}
