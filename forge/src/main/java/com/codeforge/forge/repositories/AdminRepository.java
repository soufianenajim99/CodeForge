package com.codeforge.forge.repositories;

import com.codeforge.forge.models.Admin;
import com.codeforge.forge.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AdminRepository extends JpaRepository<Admin, UUID> {
}
