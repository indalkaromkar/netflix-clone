package com.netflixClone.backend.service;

import com.netflixClone.backend.model.card;
import com.netflixClone.backend.model.payment;
import com.netflixClone.backend.model.paymentWrapper;

public interface paymentService {
    //payment proceedPayment();
    boolean cardValidation(card cardDetails);

    boolean proceedPayment(paymentWrapper newPayment);
}
