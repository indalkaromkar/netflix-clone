package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.card;
import com.netflixClone.backend.model.paymentWrapper;
import com.netflixClone.backend.service.paymentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@Tag(name = "Payment", description = "Payment processing APIs")
public class paymentController {

    @Autowired
    private paymentService paymentService;

    @PostMapping("api/payment/card")
    @Operation(
        summary = "Validate credit/debit card",
        description = "Validates the provided credit or debit card details including card number, expiration date, and CVV"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200", 
            description = "Card validation completed",
            content = @Content(
                mediaType = "application/json",
                schema = @Schema(type = "boolean", description = "true if card is valid, false otherwise")
            )
        ),
        @ApiResponse(
            responseCode = "400", 
            description = "Invalid card details provided",
            content = @Content
        )
    })
    public ResponseEntity<Boolean> cardValidation(
        @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Credit/Debit card details to validate",
            required = true,
            content = @Content(schema = @Schema(implementation = card.class))
        )
        @RequestBody card cardDetails
    ){
        boolean validity= paymentService.cardValidation(cardDetails);
        return ResponseEntity.ok(validity);
    }
    
    @PostMapping("api/payment/proceed")
    @Operation(
        summary = "Process subscription payment",
        description = "Processes payment for Netflix Clone subscription using provided card and payment details"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "201", 
            description = "Payment processed successfully",
            content = @Content(
                mediaType = "text/plain",
                schema = @Schema(type = "string", example = "Payment processed successfully.")
            )
        ),
        @ApiResponse(
            responseCode = "400", 
            description = "Invalid payment details",
            content = @Content
        ),
        @ApiResponse(
            responseCode = "500", 
            description = "Payment processing failed due to server error",
            content = @Content(
                mediaType = "text/plain",
                schema = @Schema(type = "string", example = "Payment processing failed.")
            )
        )
    })
    public ResponseEntity<String> proceedPayment(
        @io.swagger.v3.oas.annotations.parameters.RequestBody(
            description = "Payment wrapper containing card and payment information",
            required = true,
            content = @Content(schema = @Schema(implementation = paymentWrapper.class))
        )
        @RequestBody paymentWrapper payment
    ){
        if(paymentService.proceedPayment(payment))
            return ResponseEntity.status(HttpStatus.CREATED).body("Payment processed successfully.");
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Payment processing failed.");
    }
}
