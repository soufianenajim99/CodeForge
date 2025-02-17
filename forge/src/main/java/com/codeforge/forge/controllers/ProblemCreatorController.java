package com.codeforge.forge.controllers;

import com.codeforge.forge.models.ProblemCreator;
import com.codeforge.forge.services.ProblemCreatorService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/problemcreators")
public class ProblemCreatorController extends GenericController<ProblemCreator, ProblemCreatorService> {
    public ProblemCreatorController(ProblemCreatorService service) {
        super(service);
    }
}
