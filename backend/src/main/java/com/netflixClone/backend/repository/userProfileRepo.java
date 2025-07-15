package com.netflixClone.backend.repository;

import com.netflixClone.backend.model.userProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface userProfileRepo extends JpaRepository<userProfile,Long> {
    Optional<userProfile> findByGameHandle(String gameHandle);
    Optional<userProfile> findByEmailAndProfileName(String email,String profileName);
    void deleteByEmailAndProfileName(String email,String profileName);
    List<userProfile> findAllByEmail(String email);
}
