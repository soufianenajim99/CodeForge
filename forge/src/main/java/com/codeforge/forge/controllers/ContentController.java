package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Content;
import com.codeforge.forge.services.ContentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contents")
public class ContentController extends GenericController<Content, ContentService> {
    public ContentController(ContentService service) {
        super(service);
    }
}
