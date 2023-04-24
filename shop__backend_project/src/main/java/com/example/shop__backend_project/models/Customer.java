package com.example.shop__backend_project.models;

import java.util.ArrayList;

public class Customer {

    private Long id;
    private String name;
    private String email;
    private ArrayList<Product>products;

    public Customer(String name, String email){
        this.name =name;
        this.email = email;
        this.products = new ArrayList<>();
    }
    public Customer(){

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ArrayList<Product> getProducts() {
        return products;
    }

    public void setProducts(ArrayList<Product> products) {
        this.products = products;
    }
}
