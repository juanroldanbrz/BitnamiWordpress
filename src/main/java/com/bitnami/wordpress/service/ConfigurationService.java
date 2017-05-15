package com.bitnami.wordpress.service;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.ec2.model.InstanceType;
import com.bitnami.wordpress.model.entity.Configuration;
import com.bitnami.wordpress.repository.ConfigurationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConfigurationService implements IConfigurationService {

    @Autowired
    private ConfigurationRepository configurationRepository;

    //@TODO Change to fetch the latest version
    // (or a list of available configurations)
    @Override
    public Configuration getLastConfiguration() {
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

    @Override
    public Configuration getConfigurationById(Long id) {
        return configurationRepository.findOne(id);
    }
}
