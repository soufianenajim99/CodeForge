package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;
import java.util.*;
@Data
@Entity
public class Leaderboard {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private Integer rank;

    @ManyToOne
    @JoinColumn(name = "participant_id")
    private Participant participant;
}
