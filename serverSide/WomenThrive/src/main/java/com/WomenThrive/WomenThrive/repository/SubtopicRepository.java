package com.WomenThrive.WomenThrive.repository;

import com.WomenThrive.WomenThrive.model.Subtopic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface  SubtopicRepository extends JpaRepository<Subtopic ,Integer> {
    @Query("select l from Subtopic l where l.subtopic_NAME like %?1%")

    List<Subtopic> getSearch(String name);
}

