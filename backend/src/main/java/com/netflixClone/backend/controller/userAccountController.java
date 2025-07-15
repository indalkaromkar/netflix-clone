package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.userAccount;
import com.netflixClone.backend.service.userAccountService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@Tag(name = "User Account", description = "User registration and authentication APIs")
public class userAccountController {
    @Autowired
    private userAccountService userAccountService;

    @PostMapping("api/register")
    @Operation(summary = "Register new user", description = "Creates a new user account")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "User registered successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid user data")
    })
    public ResponseEntity<userAccount> userRegister(@RequestBody userAccount newUser){
        return new ResponseEntity<userAccount>(userAccountService.userRegister(newUser), HttpStatus.CREATED);
    }
    @GetMapping("api/verifyEmail/{email}")
    @Operation(summary = "Verify email exists", description = "Checks if an email address is already registered")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Email verification result")
    })
    public boolean emailExists(@Parameter(description = "Email address to verify") @PathVariable String email) {
        return userAccountService.emailExists(email);
    }
    @GetMapping("api/authenticator/{email}/{password}")
    @Operation(summary = "Authenticate user", description = "Validates user credentials")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Authentication result")
    })
    public ResponseEntity<Boolean> userAuthentication(
            @Parameter(description = "User email") @PathVariable("email") String email, 
            @Parameter(description = "User password") @PathVariable("password") String password){
        boolean validity= userAccountService.userAuthentication(email,password);
        return ResponseEntity.ok(validity);
    }
}
