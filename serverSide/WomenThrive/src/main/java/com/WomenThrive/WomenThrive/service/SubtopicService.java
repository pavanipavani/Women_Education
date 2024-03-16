package com.WomenThrive.WomenThrive.service;

import com.WomenThrive.WomenThrive.model.Subtopic;

import java.util.List;

public interface SubtopicService {
    Subtopic create(Subtopic subtopic);

    List<Subtopic> getAllSubtopic();

    Subtopic getOneSubtopic(Integer id);

    Subtopic update(Subtopic subtopic);

    String deleteSubtopic(Integer id);

    List<Subtopic> getSearch(String name);
}
