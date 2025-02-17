package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.util.*;
@Data
@Entity
public class TestCase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String input;
    private String expectedOutput;
    private Boolean isPublic;

    @ManyToOne
    @JoinColumn(name = "solution_id")
    private Solution solution;
}
