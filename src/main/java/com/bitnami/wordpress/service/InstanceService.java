package com.bitnami.wordpress.service;

import com.bitnami.wordpress.exception.NoInstanceException;
import com.bitnami.wordpress.model.AMIInstanceStatus;
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

    public AMIInstanceStatus getInstanceStatus(User user){
        Instance updatedInstance = updateInstanceStatus(user);
        return new AMIInstanceStatus(updatedInstance.getState(),
                updatedInstance.getStatus());
    }

    private Instance updateInstanceStatus(User user){
        Instance instance = user.getInstance();
        AMIInstanceStatus amiInstanceStatus = awsService.getAWSInstanceStatus(instance);
        if(amiInstanceStatus != null) {
            instance.setState(amiInstanceStatus.getState());
            instance.setStatus(amiInstanceStatus.getStatus());
        }

        instanceRepository.save(instance);
        return instance;
    }
}
