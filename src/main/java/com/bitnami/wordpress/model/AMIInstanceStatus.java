package com.bitnami.wordpress.model;

public class AMIInstanceStatus {
    private String state;
    private String status;

    public AMIInstanceStatus(){}

    public AMIInstanceStatus(String state, String status) {
        this.state = state;
        this.status = status;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
