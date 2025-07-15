package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.card;
import com.netflixClone.backend.model.payment;
import com.netflixClone.backend.model.paymentWrapper;
import com.netflixClone.backend.repository.cardRepo;
import com.netflixClone.backend.repository.paymentRepo;
import com.netflixClone.backend.service.paymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class paymentServiceImpl implements paymentService {

    @Autowired
    private paymentRepo paymentRepository;
    @Autowired
    private cardRepo cardRepository;

    public boolean cardValidation(card cardDetails){

        boolean isExpValid=false;
        boolean isCardNoValid=false;

        String[] validIINs = {
                "4",
                "51","52","53","54","55",
                "2221","2222","2223","2224","2225","2226","2227","2228","2229",
                "223","224","225","226","227","228","229",
                "23","24","25","26","270","271","2720",
                "34","37",
                "6011","644","645","646","647","648","649","65",
                "3528","3529","353","354","355","356","357","358",
                "300","301","302","303","304","305","36","38","39",
                "50","56","57","58","59","60","61","62","63","64","65","66","67","68","69",
                "62"
        };

        String cardNumber= cardDetails.getCardNumber().replaceAll("\\s", "");
        String[] parts=cardDetails.getExpDate().split("/");

        int month=Integer.parseInt(parts[0]);
        int year=Integer.parseInt(parts[1])+2000;

        LocalDate currentDate=LocalDate.now();
        int currentMonth=currentDate.getMonthValue();
        int currentYear=currentDate.getYear();

        if(month>0&&month<13){
            isExpValid= (currentYear==year&&currentMonth<month)||(currentYear<year);
        }
        for (String iin : validIINs) {
            if (cardNumber.startsWith(iin)) {
                isCardNoValid=true;
                break;
            }
        }
        return isCardNoValid&&isExpValid;
    }

    public boolean proceedPayment(paymentWrapper payment){
        LocalDateTime paymentDateTime=LocalDateTime.now();
        payment.getNewPayment().setPaymentDateTime(paymentDateTime);
        cardRepository.save(payment.getNewCard());
        paymentRepository.save(payment.getNewPayment());
        return true;
    }
}
