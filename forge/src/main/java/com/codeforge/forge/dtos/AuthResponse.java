package com.codeforge.forge.dtos;

import lombok.Data;

@Data
public class AuthResponse {
    private String email;
    private String role;
    private String token;
    private long expiresIn;
}
