package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Participant;
import com.codeforge.forge.repositories.ParticipantRepository;
import com.codeforge.forge.services.ParticipantService;
import org.springframework.stereotype.Service;

@Service
public class ParticipantServiceImpl extends GenericServiceImpl<Participant, ParticipantRepository> implements ParticipantService {
    public ParticipantServiceImpl(ParticipantRepository repository) {
        super(repository);
    }
}
