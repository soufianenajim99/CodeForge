package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Marketplace;
import com.codeforge.forge.repositories.MarketplaceRepository;
import com.codeforge.forge.services.MarketplaceService;
import org.springframework.stereotype.Service;

@Service
public class MarketplaceServiceImpl extends GenericServiceImpl<Marketplace, MarketplaceRepository> implements MarketplaceService {
    public MarketplaceServiceImpl(MarketplaceRepository repository) {
        super(repository);
    }
}
