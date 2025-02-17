package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Solution;
import com.codeforge.forge.services.SolutionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/solutions")
public class SolutionController extends GenericController<Solution, SolutionService> {
    public SolutionController(SolutionService service) {
        super(service);
    }
}
