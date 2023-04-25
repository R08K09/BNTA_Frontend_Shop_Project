package com.example.shop__backend_project.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private int price;
    @Column
    private String colour;
    @Column
    private String category;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    public Product(String name, String colour, String category, int price){
        this.name = name;
        this.colour = colour;
        this.category = category;
        this.price = price;
        this.customer = null; //Nullable until product is assigned

    }
    public Product(){

    }
//    public void addCustomer(Customer customer) {
//        this.customer;
//    }


    //getters and setters


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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
