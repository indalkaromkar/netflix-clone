package com.netflixClone.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "userVideoList")
public class userVideoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uniqueId;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "profileName",nullable = false)
    private String profileName;
    @Column(name = "videoTitle",nullable = false)
    private String videoTitle;
    @Column(name = "videoThumbnail",nullable = false)
    private String Thumbnail;
    @Column(name = "videoCategory",nullable = false)
    private String videoCategory;
    @Column(name = "releaseYear",nullable = false)
    private String releaseYear;
}
