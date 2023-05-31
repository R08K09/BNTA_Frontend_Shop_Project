package com.example.shop__backend_project.models;

import com.example.shop__backend_project.enums.DiscountEnum;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(name = "date of purchase")
    private LocalDate dateOfPurchase;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    @JsonIgnoreProperties({"orders"})
    private Customer customer;

    @OneToOne
    @JoinColumn(name = "product_id")
    @JsonIgnoreProperties({"orders"})
    private Product product;


    @Column
    private DiscountEnum discount;


    @Column
    private int orderTotal;


    public Order(Product product, Customer customer, LocalDate dateOfPurchase, int orderTotal){
        this.product = product;
        this.customer = customer;
        this.dateOfPurchase = dateOfPurchase;
        this.orderTotal = orderTotal;
    }
    public Order(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateOfPurchase() {
        return dateOfPurchase;
    }

    public void setDateOfPurchase(LocalDate dateOfPurchase) {
        this.dateOfPurchase = dateOfPurchase;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }


    public DiscountEnum getDiscount() {
        return discount;
    }

    public void setDiscount(DiscountEnum discount) {
        this.discount = discount;
    }

    public int getOrderTotal() {
        return orderTotal;
    }

    public void setOrderTotal(int orderTotal) {
        this.orderTotal = orderTotal;
    }
}
