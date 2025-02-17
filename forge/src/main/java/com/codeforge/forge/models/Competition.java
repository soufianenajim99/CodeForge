package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.*;
@Data
@Entity
public class Competition {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String title;
    private String description;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    @ManyToOne
    @JoinColumn(name = "participant_id")
    private Participant participant;

    @ManyToMany(mappedBy = "competitions")
    private Set<Problem> problems;
}
