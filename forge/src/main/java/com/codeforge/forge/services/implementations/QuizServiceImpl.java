package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Quiz;
import com.codeforge.forge.repositories.QuizRepository;
import com.codeforge.forge.services.QuizService;
import org.springframework.stereotype.Service;

@Service
public class QuizServiceImpl extends GenericServiceImpl<Quiz, QuizRepository> implements QuizService {
    public QuizServiceImpl(QuizRepository repository) {
        super(repository);
    }
}
