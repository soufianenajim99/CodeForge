package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.ProblemCreator;
import com.codeforge.forge.repositories.ProblemCreatorRepository;
import com.codeforge.forge.services.ProblemCreatorService;
import org.springframework.stereotype.Service;

@Service
public class ProblemCreatorServiceImpl extends GenericServiceImpl<ProblemCreator, ProblemCreatorRepository> implements ProblemCreatorService {
    public ProblemCreatorServiceImpl(ProblemCreatorRepository repository) {
        super(repository);
    }
}
