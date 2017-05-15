package com.bitnami.wordpress.controller.API;

import com.bitnami.wordpress.model.entity.Configuration;
import com.bitnami.wordpress.service.IConfigurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ConfigurationApiController {

    @Autowired
    private IConfigurationService configurationService;

    @RequestMapping(value = "/config", method = RequestMethod.GET)
    public Configuration getLastConfig(){
        return configurationService.getLastConfiguration();
    }
}
