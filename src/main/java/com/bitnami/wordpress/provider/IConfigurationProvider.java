package com.bitnami.wordpress.provider;

import com.bitnami.wordpress.model.Configuration;

/**
 * Created by yamajun on 14/5/17.
 */
public interface IConfigurationProvider {
    //@TODO: Consume web service to get latest configuration
    Configuration getConfiguration();
}
