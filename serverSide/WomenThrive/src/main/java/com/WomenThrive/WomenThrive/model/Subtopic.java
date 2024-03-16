package com.WomenThrive.WomenThrive.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "subtopic")
public class Subtopic {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int subtopic_ID;

    @Column
    private String subtopic_NAME;

    private String subtopic_CONTENT;

    public int getSubtopic_ID() {
        return subtopic_ID;
    }

    public void setSubtopic_ID(int subtopic_ID) {
        this.subtopic_ID = subtopic_ID;
    }

    public String getSubtopic_NAME() {
        return subtopic_NAME;
    }

    public void setSubtopic_NAME(String subtopic_NAME) {
        this.subtopic_NAME = subtopic_NAME;
    }

    public String getSubtopic_CONTENT(){return subtopic_CONTENT; }

    public void setSubtopic_CONTENT(String subtopic_CONTENT){this.subtopic_CONTENT = subtopic_CONTENT;}
}
