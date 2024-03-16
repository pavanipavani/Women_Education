package com.WomenThrive.WomenThrive.service.impl;

import com.WomenThrive.WomenThrive.model.Subtopic;
import com.WomenThrive.WomenThrive.repository.SubtopicRepository;
import com.WomenThrive.WomenThrive.service.SubtopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubtopicServiceImpl implements SubtopicService {
    @Autowired
    private SubtopicRepository subtopicRepository;

    @Override
    public Subtopic create(Subtopic subtopic) {
        return subtopicRepository.save(subtopic);
    }

    @Override
    public List<Subtopic> getAllSubtopic() {
        return subtopicRepository.findAll();
    }

    @Override
    public Subtopic getOneSubtopic(Integer id) {
        return subtopicRepository.findById(id).orElse(null);
    }

    @Override
    public Subtopic update(Subtopic subtopic) {
        return subtopicRepository.save(subtopic);
    }

    @Override
    public String deleteSubtopic(Integer id) {
            subtopicRepository.deleteById(id);
            return "Subtopic is deleted successfully";
    }


    @Override
    public List<Subtopic> getSearch(String name) {
        return subtopicRepository.getSearch(name);
    }
}
