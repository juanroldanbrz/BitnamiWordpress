package com.bitnami.wordpress.controller.API;

import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.service.AWSService;
import com.bitnami.wordpress.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api")
public class AMIApiController {

    @Autowired
    private UserService userService;

    @Autowired
    private AWSService awsService;

    //@TODO Change to POST
    @RequestMapping(value = "/launchAMI", method = RequestMethod.GET)
    public void ami(Principal principal,
                    @RequestParam(value = "instanceName", required = false) String instanceName,
                    @RequestParam(value = "configurationId", required = false) String configurationId){
        User user = userService.find(principal.getName());
        awsService.launchImage(user, instanceName, Long.valueOf(configurationId));
    }
}
