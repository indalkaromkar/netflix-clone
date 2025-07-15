package com.netflixClone.backend.service;

import com.netflixClone.backend.model.videoMetaData;

import java.util.List;


public interface videoSuggestionService {
    List<videoMetaData> getSuggestions(String suggestionCategory);
}
