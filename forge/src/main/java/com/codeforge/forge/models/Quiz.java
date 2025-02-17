package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.util.*;
@Data
@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String title;
    @ElementCollection
    private List<String> questions;
    @ElementCollection
    private Map<String, String> answers;
    @OneToOne
    @JoinColumn(name = "tutorial_id")
    private Tutorial tutorial;
}
