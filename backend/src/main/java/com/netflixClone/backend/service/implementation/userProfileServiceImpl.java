package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.userProfile;
import com.netflixClone.backend.repository.preferencesRepo;
import com.netflixClone.backend.repository.userProfileRepo;
import com.netflixClone.backend.service.userProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class userProfileServiceImpl implements userProfileService {

    @Autowired
    private userProfileRepo userProfileRepository;
    @Autowired
    private preferencesRepo preferencesRepository;
    public userProfile addProfile(userProfile newProfile){
        return userProfileRepository.save(newProfile);
    }
    @Override
    @Transactional
    public userProfile updateProfile(userProfile updateProfile,String email, String profileName) {
        Optional<userProfile> existingProfile=userProfileRepository.findByEmailAndProfileName(email,profileName);
        userProfile profile = existingProfile.get();
        String oldProfileName=profile.getProfileName();

        profile.setProfileName(updateProfile.getProfileName());
        profile.setProfilePicture(updateProfile.getProfilePicture());
        profile.setLanguage(updateProfile.getLanguage());
        profile.setMaturity(updateProfile.getMaturity());
        profile.setGameHandle(updateProfile.getGameHandle());

        preferencesRepository.updateProfileNameInUserVideoList(email,oldProfileName, updateProfile.getProfileName());
        return userProfileRepository.save(profile);
    }
    @Transactional
    public void deleteProfile(String email,String profileName) {
        userProfileRepository.deleteByEmailAndProfileName(email, profileName);
    }
    public boolean validateProfileName(String email, String profileName) {
        Optional<userProfile> existingProfile= userProfileRepository.findByEmailAndProfileName(email, profileName);
        return !existingProfile.isPresent();
    }
    public boolean validateGameHandle(String gameHandle) {
        Optional<userProfile> existingProfile=userProfileRepository.findByGameHandle(gameHandle);
        return !existingProfile.isPresent();
    }
    public List<userProfile> getAllProfiles(String email) {
        return userProfileRepository.findAllByEmail(email);
    }
}
