package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Admin;
import com.codeforge.forge.repositories.AdminRepository;
import com.codeforge.forge.services.AdminService;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl extends GenericServiceImpl<Admin, AdminRepository> implements AdminService {
    public AdminServiceImpl(AdminRepository repository) {
        super(repository);
    }
}
