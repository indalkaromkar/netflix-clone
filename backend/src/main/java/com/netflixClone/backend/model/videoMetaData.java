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
@Table(name = "videoMetaData")
@Schema(description = "Video metadata containing information about movies and TV shows")
public class videoMetaData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique identifier for the video", example = "1")
    private long videoID;
    
    @Column(name = "videoTitle",nullable = false)
    @Schema(description = "Title of the video", example = "The Witcher", required = true)
    private String videoTitle;
    
    @Column(name = "videoThumbnail",nullable = false)
    @Schema(description = "Thumbnail image URL for the video", example = "witcher_thumbnail", required = true)
    private String Thumbnail;
    
    @Column(name = "suggestionCategory",nullable = false)
    @Schema(description = "Category for content suggestions", example = "Now Playing", required = true)
    private String suggestionCategory;
    
    @Column(name = "videoCategory",nullable = false)
    @Schema(description = "Genre or category of the video", example = "Fantasy - Action", required = true)
    private String videoCategory;
    
    @Column(name = "videoRating",nullable = false)
    @Schema(description = "Rating of the video (0.0 to 10.0)", example = "8.2", minimum = "0.0", maximum = "10.0", required = true)
    private double videoRating;
    
    @Column(name = "releaseYear",nullable = false)
    @Schema(description = "Year the video was released", example = "2019", required = true)
    private String releaseYear;
}
