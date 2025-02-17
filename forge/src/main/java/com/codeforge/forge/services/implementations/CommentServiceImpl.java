package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Comment;
import com.codeforge.forge.repositories.CommentRepository;
import com.codeforge.forge.services.CommentService;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl extends GenericServiceImpl<Comment, CommentRepository> implements CommentService {
    public CommentServiceImpl(CommentRepository repository) {
        super(repository);
    }
}
