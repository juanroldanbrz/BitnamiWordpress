package com.bitnami.wordpress.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
public class AppController {
    @RequestMapping("/")
    public String app(){
        return "index";
    }
}
