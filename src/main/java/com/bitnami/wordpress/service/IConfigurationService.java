package com.bitnami.wordpress.service;

import com.bitnami.wordpress.model.entity.Configuration;

public interface IConfigurationService {

    //@TODO: Consume web service to get latest configuration
    Configuration getLastConfiguration();

    Configuration getConfigurationById(Long id);
}
