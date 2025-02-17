package com.codeforge.forge.controllers;

import com.codeforge.forge.models.User;
import com.codeforge.forge.services.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController extends GenericController<User, UserService> {
    public UserController(UserService service) {
        super(service);
    }
}
