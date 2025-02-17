package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Tutorial;
import com.codeforge.forge.services.TutorialService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tutorials")
public class TutorialController extends GenericController<Tutorial, TutorialService> {
    public TutorialController(TutorialService service) {
        super(service);
    }
}
