package com.codeforge.forge.services.implementations;

import com.codeforge.forge.models.Leaderboard;
import com.codeforge.forge.repositories.LeaderboardRepository;
import com.codeforge.forge.services.LeaderboardService;
import org.springframework.stereotype.Service;

@Service
public class LeaderboardServiceImpl extends GenericServiceImpl<Leaderboard, LeaderboardRepository> implements LeaderboardService {
    public LeaderboardServiceImpl(LeaderboardRepository repository) {
        super(repository);
    }
}
