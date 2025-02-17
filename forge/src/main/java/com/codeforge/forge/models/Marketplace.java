package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;
import java.util.*;
@Data
@Entity
public class Marketplace {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @OneToMany(mappedBy = "marketplace", cascade = CascadeType.ALL)
    private List<Content> contents;
}
