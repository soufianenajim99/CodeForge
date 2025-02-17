package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.util.*;
@Data
@Entity
public class Solution {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String code;
    private String language;
    private Date submittedAt;
    private String status;
    private Double executionTime;

    @ManyToOne
    @JoinColumn(name = "participant_id")
    private Participant participant;

    @ManyToOne
    @JoinColumn(name = "problem_id")
    private Problem problem;

    @OneToMany(mappedBy = "solution")
    private List<TestCase> testCases;
}
