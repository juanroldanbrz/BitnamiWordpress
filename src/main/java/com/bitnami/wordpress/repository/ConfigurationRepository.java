package com.bitnami.wordpress.repository;

import com.bitnami.wordpress.model.entity.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigurationRepository extends JpaRepository<Configuration, Long> {
    Configuration findByAmiIdentifier(String id);
}
