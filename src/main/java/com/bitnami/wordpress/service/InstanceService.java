package com.bitnami.wordpress.service;

import com.bitnami.wordpress.exception.NoInstanceException;
import com.bitnami.wordpress.model.entity.Instance;
import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.repository.InstanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstanceService {

    @Autowired
    private AWSService awsService;

    @Autowired
    private InstanceRepository instanceRepository;

    public void save(Instance instance){
        instanceRepository.save(instance);
    }

    public void delete(Long id){
        instanceRepository.delete(id);
    }

    public Instance getInstance(User user){
        if(user.getInstance() == null){
            throw new NoInstanceException();
        }

        return updateInstanceStatus(user);
    }

    public String getInstanceStatus(User user){
        return updateInstanceStatus(user).getStatus();
    }

    private Instance updateInstanceStatus(User user){
        com.amazonaws.services.ec2.model.Instance awsInstance = awsService.getAWSInstance(user);
        Instance instance = user.getInstance();
        instance.setStatus(awsInstance.getState().getName());

        if(instance.getUrl().isEmpty()){
            instance.setUrl(awsInstance.getPublicDnsName());
        }

        instanceRepository.save(instance);
        return instance;
    }
}
