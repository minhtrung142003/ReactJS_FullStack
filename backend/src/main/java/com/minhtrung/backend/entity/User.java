package com.minhtrung.backend.entity;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullname;
    private String email;
    private String phone_number;
    private String address;
    private String password;
    private Date created_at;  
    private Date updated_at;
    private int deleted;

    public User(String fullname, String email, String password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    @ManyToOne
    private Role role;
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Token> tokens;
}
