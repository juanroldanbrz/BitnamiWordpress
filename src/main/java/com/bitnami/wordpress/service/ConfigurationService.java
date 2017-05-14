package com.bitnami.wordpress.service;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.ec2.model.InstanceType;
import com.bitnami.wordpress.model.Configuration;
import com.bitnami.wordpress.provider.IConfigurationProvider;
import com.bitnami.wordpress.repository.ConfigurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConfigurationService implements IConfigurationProvider {

    @Autowired
    private ConfigurationRepository configurationRepository;

    @Override
    public Configuration getConfiguration() {
        String AMIIdentifier = "ami-57ba2241";
        Configuration configuration = new Configuration(
                AMIIdentifier,
                "WordPress 4.7.4-0 (64-bit)",
                "Ubuntu 14.04.3-x86",
                Regions.US_EAST_1,
                InstanceType.T1Micro);
        Configuration storedConfig = configurationRepository.findByAmiIdentifier(AMIIdentifier);

        if(storedConfig == null){
             configurationRepository.save(configuration);
        } else {
            configuration = storedConfig;
        }

        return configuration;
    }
}
