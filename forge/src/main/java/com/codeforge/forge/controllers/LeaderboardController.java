package com.codeforge.forge.controllers;

import com.codeforge.forge.models.Leaderboard;
import com.codeforge.forge.services.LeaderboardService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController extends GenericController<Leaderboard, LeaderboardService> {
    public LeaderboardController(LeaderboardService service) {
        super(service);
    }
}
