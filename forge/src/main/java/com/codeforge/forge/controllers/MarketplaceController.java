package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Marketplace;
import com.codeforge.forge.services.MarketplaceService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/marketplaces")
public class MarketplaceController extends GenericController<Marketplace, MarketplaceService> {
    public MarketplaceController(MarketplaceService service) {
        super(service);
    }
}
