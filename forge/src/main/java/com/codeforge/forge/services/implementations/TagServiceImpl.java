package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Tag;
import com.codeforge.forge.repositories.TagRepository;
import com.codeforge.forge.services.TagService;
import org.springframework.stereotype.Service;

@Service
public class TagServiceImpl extends GenericServiceImpl<Tag, TagRepository> implements TagService {
    public TagServiceImpl(TagRepository repository) {
        super(repository);
    }
}
