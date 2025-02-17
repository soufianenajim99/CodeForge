package com.codeforge.forge.repositories;

import com.codeforge.forge.models.Comment;
import com.codeforge.forge.models.ProblemCreator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ProblemCreatorRepository extends JpaRepository<ProblemCreator, UUID> {
}
