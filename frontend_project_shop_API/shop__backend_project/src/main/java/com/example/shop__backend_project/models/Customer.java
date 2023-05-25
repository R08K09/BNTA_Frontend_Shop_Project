package com.example.shop__backend_project.models;

import com.example.shop__backend_project.enums.DiscountEnum;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customers")
public class Customer {

    // Customers have an ID, name, email address and a list of products
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String name;
    @Column
    private String email;

    @Column
    private DiscountEnum discountCategory;
    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<Product> products;

    public Customer(String name, String email, DiscountEnum discountCategory){
        this.name =name;
        this.email = email;
        this.discountCategory = discountCategory;
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

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public DiscountEnum getDiscountCategory() {
        return discountCategory;
    }

    public void setDiscountCategory(DiscountEnum discountCategory) {
        this.discountCategory = discountCategory;
    }
}
