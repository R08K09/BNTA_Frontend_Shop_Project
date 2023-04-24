package com.example.shop__backend_project.models;

public class Product {

    private Long id;
    private String name;
    private int price;
    private String colour;
    private String category;

    public Product(String name, String colour, String category, int price){
        this.name = name;
        this.colour = colour;
        this.category = category;
        this.price = price;

    }
    public Product(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
