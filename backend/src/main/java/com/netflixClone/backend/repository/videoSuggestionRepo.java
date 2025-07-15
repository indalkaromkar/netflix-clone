package com.netflixClone.backend.repository;

import com.netflixClone.backend.model.videoMetaData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface videoSuggestionRepo extends JpaRepository<videoMetaData,Long> {
    List<videoMetaData> findBySuggestionCategory(String suggestionCategory);
}
