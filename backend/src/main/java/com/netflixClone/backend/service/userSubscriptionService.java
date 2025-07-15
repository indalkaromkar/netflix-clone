package com.netflixClone.backend.service;

import com.netflixClone.backend.model.userSubscription;

public interface userSubscriptionService {
    userSubscription planRegistration(userSubscription newSubscriber);
    boolean validateSubscription(String email);
}
