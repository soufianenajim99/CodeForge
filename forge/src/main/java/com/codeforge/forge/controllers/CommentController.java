package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Comment;
import com.codeforge.forge.services.CommentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comments")
public class CommentController extends GenericController<Comment, CommentService> {
    public CommentController(CommentService service) {
        super(service);
    }
}
