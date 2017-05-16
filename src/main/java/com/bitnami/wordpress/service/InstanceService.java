package com.bitnami.wordpress.service;

import com.bitnami.wordpress.exception.NoInstanceException;
import com.bitnami.wordpress.model.AMIInstanceStatus;
import com.bitnami.wordpress.model.entity.Instance;
import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.repository.InstanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.StringUtils;

@Service
public class InstanceService {

    @Autowired
    private AWSService awsService;

    @Autowired
    private UserService userService;

    @Autowired
    private InstanceRepository instanceRepository;

    public void save(Instance instance){
        instanceRepository.save(instance);
    }

    public void delete(Long id){
        instanceRepository.delete(id);
    }

    public Instance getUpdatedInstance(){
        User user = userService.getLoggedUser();
        if(user.getInstance() == null){
            throw new NoInstanceException();
        }

        Instance instance = user.getInstance();
        if(StringUtils.isEmpty(instance.getUrl())){
            instance.setUrl(awsService.getInstanceUrl(instance));
        }

        return updateInstanceStatus(instance);
    }

    public AMIInstanceStatus getInstanceStatus(Instance instance){
        Instance updatedInstance = updateInstanceStatus(instance);
        return new AMIInstanceStatus(updatedInstance.getState(),
                updatedInstance.getStatus());
    }

    private Instance updateInstanceStatus(Instance instance){
        AMIInstanceStatus amiInstanceStatus = awsService.getAWSInstanceStatus(instance);
        if(amiInstanceStatus != null) {
            instance.setState(amiInstanceStatus.getState());
            instance.setStatus(amiInstanceStatus.getStatus());
        }

        instanceRepository.save(instance);
        return instance;
    }
}
