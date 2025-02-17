package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Participant;
import com.codeforge.forge.services.ParticipantService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/participants")
public class ParticipantController extends GenericController<Participant, ParticipantService> {
    public ParticipantController(ParticipantService service) {
        super(service);
    }
}
