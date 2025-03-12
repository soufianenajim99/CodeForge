package com.codeforge.forge.services.implementations;

import com.codeforge.forge.auth.JwtService;
import com.codeforge.forge.models.Admin;
import com.codeforge.forge.models.Participant;
import com.codeforge.forge.models.ProblemCreator;
import com.codeforge.forge.models.User;
import com.codeforge.forge.repositories.UserRepository;
import com.codeforge.forge.services.UserService;
import com.codeforge.forge.utils.enums.Role;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl extends GenericServiceImpl<User, UserRepository> implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository repository, UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        super(repository);
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    private final JwtService jwtService;

    // Register Admin
    public Admin registerAdmin(Admin admin) {
        admin.setRole(Role.ADMIN);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setCreatedAt(LocalDateTime.now());
        admin.setUpdatedAt(LocalDateTime.now());
        return userRepository.save(admin);
    }

    // Register Participant
    public Participant registerParticipant(Participant participant) {
        participant.setRole(Role.PARTICIPANT);
        participant.setPassword(passwordEncoder.encode(participant.getPassword()));
        participant.setCreatedAt(LocalDateTime.now());
        participant.setUpdatedAt(LocalDateTime.now());

        return userRepository.save(participant);
    }

    // Register Problem Creator
    public ProblemCreator registerProblemCreator(ProblemCreator problemCreator) {
        problemCreator.setRole(Role.PROBLEM_CREATOR);
        problemCreator.setPassword(passwordEncoder.encode(problemCreator.getPassword()));
        problemCreator.setCreatedAt(LocalDateTime.now());
        problemCreator.setUpdatedAt(LocalDateTime.now());
        userRepository.save(problemCreator);
        return userRepository.save(problemCreator);
    }
    public String generateToken(User user) {
        return jwtService.generateToken(user, user.getRole().name());
    }

    public long getTokenExpirationTime() {
        return jwtService.getExpirationTime();
    }
    // Method to get Role (based on instance type)
    public String getRole(User user) {
        if (user instanceof Admin) {
            return "ADMIN";
        } else if (user instanceof ProblemCreator) {
            return "PROBLEM_CREATOR";
        } else if (user instanceof Participant) {
            return "PARTICIPANT";
        } else {
            return "UNKNOWN";
        }
    }


    public Map<String, String> login(String email, String rawPassword) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        String jwtToken = jwtService.generateToken(user,"user");
        String role = getRole(user);

        Map<String, String> response = new HashMap<>();
        response.put("token", jwtToken);
        response.put("role", role);
        response.put("email", user.getEmail());

        return response;
    }
}
