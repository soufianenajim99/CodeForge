package com.codeforge.forge.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface GenericService<T> {
    List<T> findAll();
    Optional<T> findById(UUID id);
    T save(T entity);
    void deleteById(UUID id);
}
