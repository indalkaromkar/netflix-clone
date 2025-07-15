package com.netflixClone.backend.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
@Schema(description = "Wrapper object containing card and payment information for processing transactions")
public class paymentWrapper {
    @Schema(description = "Credit/Debit card information", required = true)
    private card newCard;
    
    @Schema(description = "Payment transaction details", required = true)
    private payment newPayment;
}
