package com.bitnami.wordpress.service;

import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.AmazonEC2ClientBuilder;
import com.amazonaws.services.ec2.model.RunInstancesRequest;
import com.amazonaws.services.ec2.model.RunInstancesResult;
import com.bitnami.wordpress.model.Configuration;
import com.bitnami.wordpress.model.User;
import com.bitnami.wordpress.provider.CustomCredentialProvider;
import com.bitnami.wordpress.provider.IConfigurationProvider;
import com.bitnami.wordpress.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AWSService {

    @Autowired
    private IConfigurationProvider configurationProvider;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void launchImage(User user){
        Configuration configuration = configurationProvider.getConfiguration();
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
        String instanceId = run_response.getReservation().getReservationId();
        user.setInstanceId(instanceId);
        userRepository.save(user);
    }
}
