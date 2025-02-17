package com.codeforge.forge.models;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.*;
@Data
@Entity
public class Content {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String title;
    private String description;
    private String type;
    private Double price;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Participant seller;

    @ManyToMany(mappedBy = "purchasedContents")
    private List<Participant> buyers;

    @ManyToOne
    @JoinColumn(name = "marketplace_id")
    private Marketplace marketplace;
}
