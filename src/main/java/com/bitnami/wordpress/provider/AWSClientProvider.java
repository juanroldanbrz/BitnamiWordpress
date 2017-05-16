package com.bitnami.wordpress.provider;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.AmazonEC2ClientBuilder;
import com.bitnami.wordpress.repository.UserRepository;
import com.bitnami.wordpress.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

@Component
public class AWSClientProvider {

    @Autowired
    private UserService userService;

    public AmazonEC2 createEC2Client(){

        return AmazonEC2ClientBuilder.standard()
                .withCredentials(new CustomCredentialProvider(userService.getLoggedUser()))
                .withRegion(Regions.US_EAST_1) //@TODO Change to User.getRegion
                .build();
    }
}
