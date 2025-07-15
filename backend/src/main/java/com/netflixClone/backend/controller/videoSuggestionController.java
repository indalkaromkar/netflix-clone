package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.videoMetaData;
import com.netflixClone.backend.service.videoSuggestionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@Tag(name = "Video Suggestions", description = "APIs for retrieving video content by category")
public class videoSuggestionController {

    @Autowired
    private videoSuggestionService videoSuggestionService;

    @GetMapping("api/videoSuggestions/{suggestionCategory}")
    @Operation(
        summary = "Get video suggestions by category",
        description = "Retrieves a list of videos filtered by suggestion category such as 'Now Playing', 'Top Rated Movies', 'New Releases', or 'Originals'"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200", 
            description = "Successfully retrieved video suggestions",
            content = @Content(
                mediaType = "application/json",
                array = @ArraySchema(schema = @Schema(implementation = videoMetaData.class))
            )
        ),
        @ApiResponse(
            responseCode = "404", 
            description = "No videos found for the specified category",
            content = @Content
        )
    })
    public List<videoMetaData> getSuggestions(
        @Parameter(
            description = "Category of video suggestions (e.g., 'Now Playing', 'Top Rated Movies', 'New Releases', 'Originals')",
            required = true,
            example = "Now Playing"
        )
        @PathVariable("suggestionCategory") String suggestionCategory
    ){
        return videoSuggestionService.getSuggestions(suggestionCategory);
    }
}
