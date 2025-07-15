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
@Table(name = "cardInfo")
@Schema(description = "Credit/Debit card information for payment processing")
public class card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique identifier for the card record", example = "1")
    private long id;
    
    @Column(name = "email",nullable = false)
    @Schema(description = "Email address associated with the card", example = "user@example.com", required = true)
    private String email;
    
    @Column(name = "cardNumber",nullable = false)
    @Schema(description = "Credit/Debit card number", example = "4111111111111111", required = true)
    private String cardNumber;
    
    @Column(name = "cardHoldName",nullable = false)
    @Schema(description = "Name on the card", example = "John Doe", required = true)
    private String cardHoldName;
    
    @Column(name = "expDate",nullable = false)
    @Schema(description = "Card expiration date (MM/YY format)", example = "12/25", required = true)
    private String expDate;
    
    @Column(name = "cvv",nullable = false)
    @Schema(description = "Card verification value (3-4 digits)", example = "123", minimum = "100", maximum = "9999", required = true)
    private int cvv;
}
