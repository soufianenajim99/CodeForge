package com.codeforge.forge.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class ProblemCreator extends User {
    @OneToMany(mappedBy = "problemCreator")
    private List<Problem> problems;
}
