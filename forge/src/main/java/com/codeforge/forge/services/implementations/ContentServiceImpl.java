package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Content;
import com.codeforge.forge.repositories.ContentRepository;
import com.codeforge.forge.services.ContentService;
import org.springframework.stereotype.Service;

@Service
public class ContentServiceImpl extends GenericServiceImpl<Content, ContentRepository> implements ContentService {
    public ContentServiceImpl(ContentRepository repository) {
        super(repository);
    }
}
