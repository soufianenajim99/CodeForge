package com.codeforge.forge.services;

import com.codeforge.forge.models.Admin;
import com.codeforge.forge.models.Participant;
import com.codeforge.forge.models.ProblemCreator;
import com.codeforge.forge.models.User;

import java.util.Map;

public interface UserService extends GenericService<User> {
    public Admin registerAdmin(Admin admin);
    public Participant registerParticipant(Participant participant);
    public ProblemCreator registerProblemCreator(ProblemCreator problemCreator);
    public Map<String, String> login(String email, String rawPassword);
    public long getTokenExpirationTime();
    public String generateToken(User user);
}
