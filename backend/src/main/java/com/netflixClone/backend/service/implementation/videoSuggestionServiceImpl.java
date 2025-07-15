package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.videoMetaData;
import com.netflixClone.backend.repository.videoSuggestionRepo;
import com.netflixClone.backend.service.videoSuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class videoSuggestionServiceImpl implements videoSuggestionService {

    @Autowired
    private videoSuggestionRepo videoSuggestionRepository;
    public List<videoMetaData> getSuggestions(String suggestionCategory){
        return videoSuggestionRepository.findBySuggestionCategory(suggestionCategory);
    }
}
