package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Solution;
import com.codeforge.forge.repositories.SolutionRepository;
import com.codeforge.forge.services.SolutionService;
import org.springframework.stereotype.Service;

@Service
public class SolutionServiceImpl extends GenericServiceImpl<Solution, SolutionRepository> implements SolutionService {
    public SolutionServiceImpl(SolutionRepository repository) {
        super(repository);
    }
}
