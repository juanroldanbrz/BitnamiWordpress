package com.bitnami.wordpress.model.entity;

import com.amazonaws.regions.Regions;
import com.amazonaws.services.ec2.model.InstanceType;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Configuration {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "configuration_id")
    private Long id;

    private String amiIdentifier;
    private String wordpressVersion;
    private String osVersion;
    private Regions region;
    private InstanceType instanceType;

    @OneToMany(mappedBy = "configuration", fetch=FetchType.LAZY)
    private Set<Instance> instancesSet = null;

    public Configuration(){}

    public Configuration(String amiIdentifier, String wordpressVersion, String osVersion, Regions region, InstanceType instanceType) {
        this.amiIdentifier = amiIdentifier;
        this.wordpressVersion = wordpressVersion;
        this.osVersion = osVersion;
        this.region = region;
        this.instanceType = instanceType;
    }

    public String getAmiIdentifier() {
        return amiIdentifier;
    }

    public void setAmiIdentifier(String amiIdentifier) {
        this.amiIdentifier = amiIdentifier;
    }

    public String getWordpressVersion() {
        return wordpressVersion;
    }

    public void setWordpressVersion(String wordpressVersion) {
        this.wordpressVersion = wordpressVersion;
    }

    public String getOsVersion() {
        return osVersion;
    }

    public void setOsVersion(String osVersion) {
        this.osVersion = osVersion;
    }

    public Regions getRegion() {
        return region;
    }

    public void setRegion(Regions region) {
        this.region = region;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public InstanceType getInstanceType() {
        return instanceType;
    }

    public void setInstanceType(InstanceType instanceType) {
        this.instanceType = instanceType;
    }

    public Set<Instance> getInstancesSet() {
        return null;
    }

    public void setInstancesSet(Set<Instance> instancesSet) {
        this.instancesSet = instancesSet;
    }
}
