package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.*;

@Data
@Entity
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String title;
    private String description;
    private String difficulty;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "problem_creator_id")
    private ProblemCreator problemCreator;
    @ManyToMany
    @JoinTable(
            name = "problem_tag",
            joinColumns = @JoinColumn(name = "problem_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags;


    @ManyToMany
    @JoinTable(
            name = "problem_competition",
            joinColumns = @JoinColumn(name = "problem_id"),
            inverseJoinColumns = @JoinColumn(name = "competition_id")
    )
    private Set<Competition> competitions;

    @OneToMany(mappedBy = "problem")
    private List<Solution> solutions;
}
