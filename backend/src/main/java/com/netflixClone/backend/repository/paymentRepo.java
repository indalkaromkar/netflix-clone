package com.netflixClone.backend.repository;

import com.netflixClone.backend.model.payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface paymentRepo extends JpaRepository<payment, Long> {
}
