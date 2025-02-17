package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.User;
import com.codeforge.forge.repositories.UserRepository;
import com.codeforge.forge.services.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends GenericServiceImpl<User, UserRepository> implements UserService {
    public UserServiceImpl(UserRepository repository) {
        super(repository);
    }
}
