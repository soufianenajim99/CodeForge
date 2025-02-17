package com.codeforge.forge.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Participant extends User {
    private Integer score;
    private String nationality;
    private String organizationType;
    private String organizationName;

    @OneToMany(mappedBy = "participant")
    private List<Solution> solutions;

    @OneToMany(mappedBy = "participant")
    private List<Comment> comments;

    @OneToMany(mappedBy = "participant")
    private List<Competition> competitions;

    @OneToMany(mappedBy = "participant")
    private List<Leaderboard> leaderboards;

    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
    private List<Content> contentsForSale;

    @ManyToMany
    @JoinTable(
            name = "participant_purchases",
            joinColumns = @JoinColumn(name = "participant_id"),
            inverseJoinColumns = @JoinColumn(name = "content_id")
    )
    private List<Content> purchasedContents;


}
