package com.netflixClone.backend.repository;

import com.netflixClone.backend.model.userSubscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface userSubscriptionRepo extends JpaRepository<userSubscription,Long> {
    Optional<userSubscription> findByEmail(String email);
}
