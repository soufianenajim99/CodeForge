package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Quiz;
import com.codeforge.forge.services.QuizService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quizes")
public class QuizController extends GenericController<Quiz, QuizService> {
    public QuizController(QuizService service) {
        super(service);
    }
}
