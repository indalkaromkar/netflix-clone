package com.netflixClone.backend.service;

import com.netflixClone.backend.model.userProfile;

import java.util.List;

public interface userProfileService {
    userProfile addProfile(userProfile newProfile);
    userProfile updateProfile(userProfile updateProfile,String email,String profileName);
    void deleteProfile(String email,String profileName);
    boolean validateProfileName(String email,String profileName);
    boolean validateGameHandle(String gameHandle);
    List<userProfile> getAllProfiles(String email);
}
