package com.bitnami.wordpress.service;

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
        return updateInstanceStatus(user);
    }

    public String getInstanceStatus(User user){
        return updateInstanceStatus(user).getStatus();
    }

    private Instance updateInstanceStatus(User user){
        Instance instance = user.getInstance();
        instance.setStatus(awsService.getInstanceStatus(user).getName());
        instanceRepository.save(instance);
        return instance;
    }
}
