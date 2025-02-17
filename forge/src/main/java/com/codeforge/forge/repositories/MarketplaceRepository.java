package com.codeforge.forge.repositories;
import com.codeforge.forge.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface MarketplaceRepository extends JpaRepository<Marketplace, UUID> {}
