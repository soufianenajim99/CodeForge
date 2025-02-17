package com.codeforge.forge.services.implementations;

import com.codeforge.forge.services.GenericService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class GenericServiceImpl<T, R extends JpaRepository<T, UUID>> implements GenericService<T> {
    protected final R repository;

    public GenericServiceImpl(R repository) {
        this.repository = repository;
    }

    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<T> findById(UUID id) {
        return repository.findById(id);
    }

    @Override
    public T save(T entity) {
        return repository.save(entity);
    }

    @Override
    public void deleteById(UUID id) {
        repository.deleteById(id);
    }
}

