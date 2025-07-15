package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.userVideoList;
import com.netflixClone.backend.repository.preferencesRepo;
import com.netflixClone.backend.service.preferencesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class preferencesServiceImpl implements preferencesService {
    @Autowired
    private preferencesRepo preferencesRepository;
    public userVideoList addToList(userVideoList addVideo){
        return preferencesRepository.save(addVideo);
    }
    public List<userVideoList> getAllInList(String email, String profileName) {
        return preferencesRepository.findAllByEmailAndProfileName(email, profileName);
    }
    @Transactional
    public void removeFromList(String email, String profileName, String videoTitle) {
        preferencesRepository.deleteByEmailAndProfileNameAndVideoTitle(email,profileName,videoTitle);
    }
    @Transactional
    public void removeProfile(String email, String profileName) {
        preferencesRepository.deleteByEmailAndProfileName(email, profileName);
    }
    public boolean checkInList(String email, String profileName, String videoTitle) {
        Optional<userVideoList> inList=preferencesRepository.findByEmailAndProfileNameAndVideoTitle(email, profileName, videoTitle);
        return !inList.isPresent();
    }
}
