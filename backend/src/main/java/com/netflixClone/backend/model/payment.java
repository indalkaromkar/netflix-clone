package com.netflixClone.backend.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "transactions")
@Schema(description = "Payment transaction record")
public class payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique reference number for the transaction", example = "1001")
    private long referenceNo;
    
    @Column(name = "email",nullable = false)
    @Schema(description = "Email address of the user making the payment", example = "user@example.com", required = true)
    private String email;
    
    @Column(name = "cardNumber")
    @Schema(description = "Last 4 digits of the card number used for payment", example = "1111")
    private String cardNumber;
    
    @Column(name = "paymentAmount",nullable = false)
    @Schema(description = "Amount paid for the subscription", example = "15.99", required = true)
    private double paymentAmount;
    
    @Column(name = "paymentDateTime")
    @Schema(description = "Date and time when the payment was processed", example = "2024-01-01T12:00:00")
    private LocalDateTime paymentDateTime;
}
