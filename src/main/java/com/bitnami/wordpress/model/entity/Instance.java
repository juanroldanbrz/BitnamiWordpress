package com.bitnami.wordpress.model.entity;

import javax.persistence.*;

@Entity
public class Instance {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "instance_id")
    private Long id;

    private String reservationId;
    private String instance_identifier;
    private String name;
    private String status;
    private String url;

    @ManyToOne(fetch = FetchType.EAGER)
    private Configuration configuration;

    public Instance(){}

    public Instance(String reservationId, String instance_identifier, String name, String status,
                    String url, Configuration configuration) {
        this.reservationId = reservationId;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
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

    public String getReservationId() {
        return reservationId;
    }

    public void setReservationId(String reservationId) {
        this.reservationId = reservationId;
    }

    public String getInstance_identifier() {
        return instance_identifier;
    }

    public void setInstance_identifier(String instance_identifier) {
        this.instance_identifier = instance_identifier;
    }
}
