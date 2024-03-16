package com.WomenThrive.WomenThrive.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;


@Entity

public class Units {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int units_ID ;

    public  int getUnits_ID()
    {
        return units_ID;
    }
    public  void setUnits_ID(int units_ID)
    {
        this.units_ID = units_ID;
    }
    public String getUnits_NAME(){
        return units_NAME;
    }
    public void setUnits_NAME(String units_Name)
    {
        this.units_NAME = units_Name;
    }
    @Column
    private String units_NAME;
}
