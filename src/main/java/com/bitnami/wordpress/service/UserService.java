package com.bitnami.wordpress.service;

import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User find(String username) throws UsernameNotFoundException {
        return userRepository.findOneByUsername(username);
    }

    @Transactional
    public User save(User user) {
        userRepository.save(user);
        return user;
    }

    @Transactional
    public void saveNewUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    public User getLoggedUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return userRepository.findOneByUsername(authentication.getName());
    }
}
