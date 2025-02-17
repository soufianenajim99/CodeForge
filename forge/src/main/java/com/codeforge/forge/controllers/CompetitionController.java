package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Competition;
import com.codeforge.forge.services.CompetitionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/competitions")
public class CompetitionController extends GenericController<Competition, CompetitionService> {
    public CompetitionController(CompetitionService service) {
        super(service);
    }
}
