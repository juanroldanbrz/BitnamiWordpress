package com.bitnami.wordpress.service;

import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.AmazonEC2ClientBuilder;
import com.amazonaws.services.ec2.model.RunInstancesRequest;
import com.amazonaws.services.ec2.model.RunInstancesResult;
import com.bitnami.wordpress.model.entity.Configuration;
import com.bitnami.wordpress.model.entity.Instance;
import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.provider.CustomCredentialProvider;
import com.bitnami.wordpress.repository.InstanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AWSService {

    @Autowired
    private IConfigurationService configurationService;

    @Autowired
    private InstanceRepository instanceRepository;

    @Autowired
    private UserService userService;

    @Transactional
    public void launchImage(User user, String instanceName, long configurationId ){
        Configuration configuration = configurationService.getConfigurationById(configurationId);

        AmazonEC2 ec2 = AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(user))
                .withRegion(configuration.getRegion())
                .build();

        RunInstancesRequest run_request = new RunInstancesRequest()
                .withImageId(configuration.getAmiIdentifier())
                .withInstanceType(configuration.getInstanceType())
                .withMaxCount(1)
                .withMinCount(1);

        RunInstancesResult run_response = ec2.runInstances(run_request);
        String instanceIdentifier = run_response.getReservation().getReservationId();

        Instance instance = new Instance(instanceIdentifier, instanceName,
                Instance.STATUS.NEW_INSTANCE, "",configuration);

        instanceRepository.save(instance);
        user.setInstance(instance);
        userService.save(user);
    }
}
