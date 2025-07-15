package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.userSubscription;
import com.netflixClone.backend.service.userSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class userSubscriptionController {
    @Autowired
    private userSubscriptionService userSubscriptionService;

    @PostMapping("api/subscribe")
    public ResponseEntity<userSubscription> planRegistration(@RequestBody userSubscription newSubscriber){
        return new ResponseEntity<userSubscription>(userSubscriptionService.planRegistration(newSubscriber), HttpStatus.CREATED);
    }

    @GetMapping("api/subscribe/{email}")
    public boolean validateSubscription(@PathVariable String email) {
        return userSubscriptionService.validateSubscription(email);
    }
}
