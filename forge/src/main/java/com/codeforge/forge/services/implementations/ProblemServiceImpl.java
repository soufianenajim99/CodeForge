package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Problem;
import com.codeforge.forge.repositories.ProblemRepository;
import com.codeforge.forge.services.ProblemService;
import org.springframework.stereotype.Service;

@Service
public class ProblemServiceImpl extends GenericServiceImpl<Problem, ProblemRepository> implements ProblemService {
    public ProblemServiceImpl(ProblemRepository repository) {
        super(repository);
    }
}
