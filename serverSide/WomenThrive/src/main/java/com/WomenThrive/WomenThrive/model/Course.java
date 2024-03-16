package com.WomenThrive.WomenThrive.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int course_ID;

    public int getCourse_ID() {
        return course_ID;
    }

    public void setCourse_ID(int course_ID) {
        this.course_ID = course_ID;
    }

    public String getCourse_NAME() {
        return course_NAME;
    }

    public void setCourse_NAME(String course_NAME) {
        this.course_NAME = course_NAME;
    }
    @Column
     private String course_NAME;
}
