package com.bitnami.wordpress.controller.API;

import com.bitnami.wordpress.model.Keys;
import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api")
public class UserInfoController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/keys", method = RequestMethod.GET)
    public Keys getKeys(Principal principal){
        User user = userService.find(principal.getName());
        return new Keys(user.getAWSAccessKeyId(), user.getAWSSecretKey());
    }
}
