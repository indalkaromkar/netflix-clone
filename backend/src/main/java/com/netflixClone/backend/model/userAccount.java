package com.netflixClone.backend.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "userAccount")
@Schema(description = "User account information for authentication and registration")
public class userAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique identifier for the user account", example = "1")
    private long accountId;
    
    @Column(name = "email",nullable = false)
    @Schema(description = "User's email address", example = "user@example.com", required = true)
    private String email;
    
    @Column(name = "password",nullable = false)
    @Schema(description = "User's password (hashed in storage)", example = "password123", required = true)
    private String password;
}
