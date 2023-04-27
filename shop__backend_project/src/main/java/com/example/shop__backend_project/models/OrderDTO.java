package com.example.shop__backend_project.models;

import com.example.shop__backend_project.enums.DiscountEnum;

import java.time.LocalDate;

public class OrderDTO {
    private long productId;
    private long customerId;
    private int orderTotal;

    private LocalDate dateOfPurchase;


    public OrderDTO(long productId, long customerId, LocalDate dateOfPurchase, int orderTotal){
        this.productId = productId;
        this.customerId = customerId;
        this.orderTotal = orderTotal;
        this.dateOfPurchase = dateOfPurchase;
    }
    public OrderDTO(){

    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public int getOrderTotal() {
        return orderTotal;
    }

    public void setOrderTotal(int orderTotal) {
        this.orderTotal = orderTotal;
    }

    public LocalDate getDateOfPurchase() {
        return dateOfPurchase;
    }

    public void setDateOfPurchase(LocalDate dateOfPurchase) {
        this.dateOfPurchase = dateOfPurchase;
    }
}