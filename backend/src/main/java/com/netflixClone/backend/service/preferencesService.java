package com.netflixClone.backend.service;
import com.netflixClone.backend.model.userVideoList;
import java.util.List;

public interface preferencesService {
    void removeFromList(String email,String profileName,String videoTitle);
    void removeProfile(String email,String profileName);
    userVideoList addToList(userVideoList addVideo);
    List<userVideoList> getAllInList(String email, String profileName);
    boolean checkInList(String email,String profileName,String videoTitle);
}
