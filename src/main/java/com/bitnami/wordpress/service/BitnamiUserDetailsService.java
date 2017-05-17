package com.bitnami.wordpress.service;

import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class BitnamiUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findOneByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return createUserDetailsFromUser(user);
    }

    private org.springframework.security.core.userdetails.User createUserDetailsFromUser(User user) {
        return new org.springframework.security.core.userdetails.User
                (user.getUsername(), user.getPassword(),
                        Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
    }
}
