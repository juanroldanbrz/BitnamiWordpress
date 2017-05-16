package com.bitnami.wordpress.controller;

import com.bitnami.wordpress.model.entity.User;
import com.bitnami.wordpress.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginView(HttpServletRequest request, Model model){
        if(request.getParameterMap().containsKey("error")){
            model.addAttribute("hasError", true);
        }

        model.addAttribute("formToDisplay", "login");
        return "auth";
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String registerView(HttpServletRequest request, Model model){
        if(request.getParameterMap().containsKey("error")){
            model.addAttribute("hasError", true);
        }

        model.addAttribute("user", new User());
        model.addAttribute("formToDisplay", "register");
        return "auth";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerUser(Model model, @ModelAttribute User user){
        if (userService.find(user.getUsername()) != null) {
            model.addAttribute("hasError", true);
            model.addAttribute("formToDisplay", "register");
            return "auth";
        }

        userService.save(user);
        return "redirect:/";
    }
}
