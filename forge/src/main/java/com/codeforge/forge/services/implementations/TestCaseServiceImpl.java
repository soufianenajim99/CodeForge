package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.TestCase;
import com.codeforge.forge.repositories.TestCaseRepository;
import com.codeforge.forge.services.TestCaseService;
import org.springframework.stereotype.Service;

@Service
public class TestCaseServiceImpl extends GenericServiceImpl<TestCase, TestCaseRepository> implements TestCaseService {
    public TestCaseServiceImpl(TestCaseRepository repository) {
        super(repository);
    }
}
