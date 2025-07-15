package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.userProfile;
import com.netflixClone.backend.service.userProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@Tag(name = "User Profiles", description = "APIs for managing user profiles within accounts")
@SecurityRequirement(name = "Bearer Authentication")
public class userProfileController {

    @Autowired
    private userProfileService userProfileService;

    @PostMapping("api/profile/add")
    @Operation(
        summary = "Create new user profile",
        description = "Creates a new profile for a user account with specified name and preferences"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "201", 
            description = "Profile created successfully",
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(implementation = userProfile.class)
            )
        ),
        @ApiResponse(responseCode = "400", description = "Invalid profile data", content = @Content)
    })
    public ResponseEntity<userProfile> addProfile(
        @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Profile information to create",
            required = true,
            content = @Content(schema = @Schema(implementation = userProfile.class))
        )
        @RequestBody userProfile newProfile
    ){
        return new ResponseEntity<userProfile>(userProfileService.addProfile(newProfile),HttpStatus.CREATED);
    }
    
    @PutMapping("api/profile/update/{email}/{profileName}")
    @Operation(
        summary = "Update existing profile",
        description = "Updates an existing user profile with new information"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200", 
            description = "Profile updated successfully",
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(implementation = userProfile.class)
            )
        ),
        @ApiResponse(responseCode = "404", description = "Profile not found", content = @Content)
    })
    public ResponseEntity<userProfile> updateProfile(
        @Parameter(description = "User email address", required = true, example = "user@example.com")
        @PathVariable("email") String email,
        @Parameter(description = "Current profile name", required = true, example = "John")
        @PathVariable("profileName") String profileName,
        @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Updated profile information",
            required = true,
            content = @Content(schema = @Schema(implementation = userProfile.class))
        )
        @RequestBody userProfile existingProfile
    ){
        return new ResponseEntity<userProfile>(userProfileService.updateProfile(existingProfile,email,profileName),HttpStatus.OK);
    }
    
    @DeleteMapping("api/profile/delete/{email}/{profileName}")
    @Operation(
        summary = "Delete user profile",
        description = "Permanently deletes a user profile from the account"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200", 
            description = "Profile deleted successfully",
            content = @Content(
                mediaType = "text/plain",
                schema = @Schema(type = "string", example = "profile delete successful!")
            )
        ),
        @ApiResponse(responseCode = "404", description = "Profile not found", content = @Content)
    })
    public ResponseEntity<String> deleteProfile(
        @Parameter(description = "User email address", required = true, example = "user@example.com")
        @PathVariable("email") String email,
        @Parameter(description = "Profile name to delete", required = true, example = "John")
        @PathVariable("profileName") String profileName
    ){
        userProfileService.deleteProfile(email, profileName);
        return new ResponseEntity<String>("profile delete successful!",HttpStatus.OK);
    }
    
    @GetMapping("api/profile/validate/{email}/{profileName}")
    @Operation(
        summary = "Validate profile name",
        description = "Checks if a profile name is available for the specified user"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200", 
            description = "Profile name validation result",
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(type = "boolean", description = "true if profile name is available")
            )
        )
    })
    public ResponseEntity<Boolean> validateProfileName(
        @Parameter(description = "User email address", required = true, example = "user@example.com")
        @PathVariable("email") String email,
        @Parameter(description = "Profile name to validate", required = true, example = "NewProfile")
        @PathVariable("profileName") String profileName
    ){
        boolean validity= userProfileService.validateProfileName(email, profileName);
        return ResponseEntity.ok(validity);
    }
    
    @GetMapping("api/profile/validate/{gameHandle}")
    @Operation(
        summary = "Validate game handle",
        description = "Checks if a game handle is available across all profiles"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200", 
            description = "Game handle validation result",
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(type = "boolean", description = "true if game handle is available")
            )
        )
    })
    public ResponseEntity<Boolean> validateGameHandle(
        @Parameter(description = "Game handle to validate", required = true, example = "player123")
        @PathVariable("gameHandle") String gameHandle
    ){
        boolean validity= userProfileService.validateGameHandle(gameHandle);
        return ResponseEntity.ok(validity);
    }
    
    @GetMapping("api/profiles/{email}")
    @Operation(
        summary = "Get all user profiles",
        description = "Retrieves all profiles associated with a user account"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200", 
            description = "Successfully retrieved user profiles",
            content = @Content(
                mediaType = "application/json",
                array = @ArraySchema(schema = @Schema(implementation = userProfile.class))
            )
        ),
        @ApiResponse(responseCode = "404", description = "User not found", content = @Content)
    })
    public List<userProfile> getAllProfiles(
        @Parameter(description = "User email address", required = true, example = "user@example.com")
        @PathVariable("email") String email
    ){
        return userProfileService.getAllProfiles(email);
    }
}
