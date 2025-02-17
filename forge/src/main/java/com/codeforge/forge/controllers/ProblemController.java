package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Problem;
import com.codeforge.forge.services.ProblemService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/problems")
public class ProblemController extends GenericController<Problem, ProblemService> {
    public ProblemController(ProblemService service) {
        super(service);
    }
}
