package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.*;
@Data
@Entity
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;

    @OneToOne(mappedBy = "tutorial")
    private Quiz quiz;
}
