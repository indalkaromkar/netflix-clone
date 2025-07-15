package com.netflixClone.backend.repository;

import com.netflixClone.backend.model.userAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface userAccountRepo extends JpaRepository<userAccount,Long> {
    Optional<userAccount> findByEmail(String email);
}
