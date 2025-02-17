package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Tag;
import com.codeforge.forge.services.TagService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tags")
public class TagController extends GenericController<Tag, TagService> {
    public TagController(TagService service) {
        super(service);
    }
}
