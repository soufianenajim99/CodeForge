package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Admin;
import com.codeforge.forge.services.AdminService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admins")
public class AdminController extends GenericController<Admin, AdminService> {
    public AdminController(AdminService service) {
        super(service);
    }
}
