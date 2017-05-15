package com.bitnami.wordpress.provider;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.bitnami.wordpress.model.entity.User;

public class CustomCredentialProvider implements AWSCredentialsProvider {
    private String AWSAccessKeyId;
    private String AWSSecretKey;

    @Override
    public AWSCredentials getCredentials() {
        return new AWSCredentials() {
            @Override
            public String getAWSAccessKeyId() {
                return AWSAccessKeyId;
            }

            @Override
            public String getAWSSecretKey() {
                return AWSSecretKey;
            }
        };
    }

    public CustomCredentialProvider(User user){
        this.AWSAccessKeyId = user.getAWSAccessKeyId();
        this.AWSSecretKey = user.getAWSSecretKey();
    }

    @Override
    public void refresh() {

    }
}
