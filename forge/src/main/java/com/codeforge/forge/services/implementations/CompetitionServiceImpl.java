package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Competition;
import com.codeforge.forge.repositories.CompetitionRepository;
import com.codeforge.forge.services.CompetitionService;
import org.springframework.stereotype.Service;

@Service
public class CompetitionServiceImpl extends GenericServiceImpl<Competition, CompetitionRepository> implements CompetitionService {
    public CompetitionServiceImpl(CompetitionRepository repository) {
        super(repository);
    }
}
