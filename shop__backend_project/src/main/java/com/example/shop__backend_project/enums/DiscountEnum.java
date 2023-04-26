package com.example.shop__backend_project.enums;
public enum DiscountEnum {

    STUDENT(10), SENIOR_CITIZEN(20), HEALTHCARE(20), VETERAN(20);

    private int discount;

    DiscountEnum(int discount){
        this.discount = discount;
    }

    public int getDiscount(){
        return this.discount;
    }
}