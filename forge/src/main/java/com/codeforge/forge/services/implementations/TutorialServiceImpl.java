package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Tutorial;
import com.codeforge.forge.models.User;
import com.codeforge.forge.repositories.TutorialRepository;
import com.codeforge.forge.repositories.UserRepository;
import com.codeforge.forge.services.TutorialService;
import com.codeforge.forge.services.UserService;
import org.springframework.stereotype.Service;

@Service
public class TutorialServiceImpl extends GenericServiceImpl<Tutorial, TutorialRepository> implements TutorialService {
    public TutorialServiceImpl(TutorialRepository repository) {
        super(repository);
    }
}
