package com.codeforge.forge.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Admin extends User {
    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    private List<Tutorial> tutorials;
}
