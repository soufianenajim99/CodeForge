package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.util.*;
@Data
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    @ManyToMany(mappedBy = "tags")
    private Set<Problem> problems;
}
