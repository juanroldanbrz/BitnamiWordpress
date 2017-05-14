package com.bitnami.wordpress.controller.API;

import com.bitnami.wordpress.model.Configuration;
import com.bitnami.wordpress.model.User;
import com.bitnami.wordpress.service.AWSService;
import com.bitnami.wordpress.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api")
public class AMIApi {

    @Autowired
    private UserService userService;

    @Autowired
    private AWSService awsService;

    @RequestMapping(value = "/config", method = RequestMethod.GET)
    public Configuration getConfig(Principal principal){
        User user = userService.find(principal.getName());
        return user.getConfiguration();
    }

    @RequestMapping(value = "/launcAMI", method = RequestMethod.POST)
    public void ami(Principal principal){
        User user = userService.find(principal.getName());
        awsService.launchImage(user);
    }

}
