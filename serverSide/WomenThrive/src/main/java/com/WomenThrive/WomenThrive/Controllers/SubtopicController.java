package com.WomenThrive.WomenThrive.Controllers;

import com.WomenThrive.WomenThrive.model.Subtopic;
import com.WomenThrive.WomenThrive.service.SubtopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Subtopic")
public class SubtopicController {
    @Autowired
    private SubtopicService subtopicService;

    @PostMapping("/create")
    public Subtopic create(@RequestBody Subtopic subtopic) {
        return subtopicService.create(subtopic);
    }
    @GetMapping("")
    public List<Subtopic> getAllSubtopic() {return subtopicService.getAllSubtopic();}

    @GetMapping("/{id}")
    public Subtopic getOneSubtopic(@PathVariable Integer id) {
        return subtopicService.getOneSubtopic(id);
    }

    @PutMapping("/update")
    public Subtopic update(@RequestBody Subtopic subtopic) {
        return subtopicService.update(subtopic);
    }

    @DeleteMapping("/{id}")
    public String deleteSubtopic(@PathVariable Integer id) {
        return subtopicService.deleteSubtopic(id);
    }

    @GetMapping("/search")
    public List<Subtopic> getSearch(@RequestParam("query") String name) {
        return subtopicService.getSearch(name);
    }
}
