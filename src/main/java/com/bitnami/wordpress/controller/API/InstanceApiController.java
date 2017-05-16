package com.bitnami.wordpress.controller.API;

import com.bitnami.wordpress.model.AMIInstanceStatus;
import com.bitnami.wordpress.model.entity.Instance;
import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.service.AWSService;
import com.bitnami.wordpress.service.InstanceService;
import com.bitnami.wordpress.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/instance")
public class InstanceApiController {

    @Autowired
    private UserService userService;

    @Autowired
    private InstanceService instanceService;

    @Autowired
    private AWSService awsService;

    //@TODO Change to POST
    @RequestMapping(value = "/new", method = RequestMethod.GET)
    public void launchAmi(Principal principal,
                    @RequestParam(value = "instanceName", required = false) String instanceName,
                    @RequestParam(value = "configurationId", required = false) String configurationId){
        User user = userService.find(principal.getName());
        awsService.launchImage(instanceName, Long.valueOf(configurationId));
    }

    @RequestMapping(value = "/start", method = RequestMethod.POST)
    public DefaultResponse startAmi(Principal principal){
        User user = userService.find(principal.getName());
        awsService.startInstance(user.getInstance());
        return new DefaultResponse("OK");
    }

    @RequestMapping(value = "/stop", method = RequestMethod.POST)
    public DefaultResponse stopAmi(Principal principal){
        User user = userService.find(principal.getName());
        awsService.stopInstance(user.getInstance());
        return new DefaultResponse("OK");
    }

    @RequestMapping(value = "/restart", method = RequestMethod.POST)
    public DefaultResponse restartAmi(Principal principal){
        User user = userService.find(principal.getName());
        awsService.restartInstance(user.getInstance());
        return new DefaultResponse("OK");
    }

    @RequestMapping(value = "/terminate", method = RequestMethod.POST)
    public DefaultResponse terminateAmi(Principal principal){
        User user = userService.find(principal.getName());
        awsService.terminateInstance(user.getInstance());
        return new DefaultResponse("OK");
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Instance ami(Principal principal){
        User user = userService.find(principal.getName());
        return instanceService.getInstance(user);
    }

    @RequestMapping(value = "/status", method = RequestMethod.GET)
    public AMIInstanceStatus status(Principal principal){
        User user = userService.find(principal.getName());
        return instanceService.getInstanceStatus(user);
    }
}
