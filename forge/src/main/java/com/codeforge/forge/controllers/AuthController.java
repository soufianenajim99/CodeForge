package com.codeforge.forge.controllers;

import com.codeforge.forge.auth.JwtService;
import com.codeforge.forge.dtos.AuthResponse;
import com.codeforge.forge.dtos.LoginUserDto;
import com.codeforge.forge.dtos.RegisterUserDto;
import com.codeforge.forge.models.Admin;
import com.codeforge.forge.models.Participant;
import com.codeforge.forge.models.ProblemCreator;
import com.codeforge.forge.models.User;
import com.codeforge.forge.models.response.LoginRes;
import com.codeforge.forge.services.UserService;
import com.codeforge.forge.services.implementations.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/rest/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    // Register Admin
    @PostMapping("/register/admin")
    public ResponseEntity<AuthResponse> registerAdmin(@RequestBody Admin admin) {
        Admin savedAdmin = userService.registerAdmin(admin);
        String token = userService.generateToken(savedAdmin);
        return ResponseEntity.ok(buildAuthResponse(savedAdmin, token));
    }

    @PostMapping("/register/participant")
    public ResponseEntity<AuthResponse> registerParticipant(@RequestBody Participant participant) {
        Participant savedParticipant = userService.registerParticipant(participant);
        String token = userService.generateToken(savedParticipant);
        return ResponseEntity.ok(buildAuthResponse(savedParticipant, token));
    }

    @PostMapping("/register/problem-creator")
    public ResponseEntity<AuthResponse> registerProblemCreator(@RequestBody ProblemCreator creator) {
        ProblemCreator savedCreator = userService.registerProblemCreator(creator);
        String token = userService.generateToken(savedCreator);
        return ResponseEntity.ok(buildAuthResponse(savedCreator, token));
    }


    // Unified login for all
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Map<String, String> response = userService.login(email, password);
        return ResponseEntity.ok(response);
    }

    private AuthResponse buildAuthResponse(User user, String token) {
        AuthResponse response = new AuthResponse();
        response.setEmail(user.getEmail());
        response.setRole(user.getRole().name());
        response.setToken(token);
        response.setExpiresIn(userService.getTokenExpirationTime());
        return response;
    }
}
