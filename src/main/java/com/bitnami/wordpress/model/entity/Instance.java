package com.bitnami.wordpress.model.entity;

import javax.persistence.*;

@Entity
public class Instance {
    public enum STATUS {
        OFF,
        ON,
        NEW_INSTANCE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "instance_id")
    private Long id;

    private String instance_identifier;
    private String name;
    private STATUS status;
    private String url;

    @ManyToOne(cascade=CascadeType.ALL)
    private Configuration configuration;

    public Instance(){}

    public Instance(String instance_identifier, String name, STATUS status,
                    String url, Configuration configuration) {
        this.instance_identifier = instance_identifier;
        this.name = name;
        this.status = status;
        this.url = url;
        this.configuration = configuration;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInstanceIdentifier() {
        return instance_identifier;
    }

    public void setInstanceIdentifier(String instance_identifier) {
        this.instance_identifier = instance_identifier;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public STATUS getStatus() {
        return status;
    }

    public void setStatus(STATUS status) {
        this.status = status;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Configuration getConfiguration() {
        return configuration;
    }

    public void setConfiguration(Configuration configuration) {
        this.configuration = configuration;
    }
}
