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
@Table(name = "userProfiles")
@Schema(description = "User profile information within an account")
public class userProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique identifier for the profile", example = "1")
    private long id;
    
    @Column(name = "email",nullable = false)
    @Schema(description = "Email address of the account owner", example = "user@example.com", required = true)
    private String email;
    
    @Column(name = "profileName")
    @Schema(description = "Display name for the profile", example = "John", defaultValue = "My Profile")
    private String profileName;
    
    @Column(name = "profilePicture")
    @Schema(description = "Profile picture identifier", example = "i1", defaultValue = "i1")
    private String profilePicture;
    
    @Column(name = "language")
    @Schema(description = "Preferred language for the profile", example = "English", defaultValue = "English")
    private String language;
    
    @Column(name = "maturity")
    @Schema(description = "Content maturity level", example = "General Audience", defaultValue = "General Audience")
    private String maturity;
    
    @Column(name = "gameHandle")
    @Schema(description = "Gaming handle for the profile", example = "player123")
    private String gameHandle;

    @PrePersist
    protected void onCreate() {
        if (this.profileName == null) {
            this.profileName = "My Profile";
        }
        if (this.profilePicture == null) {
            this.profilePicture = "i1";
        }
        if (this.language == null) {
            this.language = "English";
        }
        if (this.maturity == null) {
            this.maturity = "General Audience";
        }
    }
}
