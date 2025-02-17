package com.codeforge.forge.controllers;

import com.codeforge.forge.models.TestCase;
import com.codeforge.forge.services.TestCaseService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/testcases")
public class TestCaseController extends GenericController<TestCase, TestCaseService> {
    public TestCaseController(TestCaseService service) {
        super(service);
    }
}
