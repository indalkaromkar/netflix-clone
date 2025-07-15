package com.netflixClone.backend.repository;

import com.netflixClone.backend.model.card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface cardRepo extends JpaRepository<card,Long> {
}
