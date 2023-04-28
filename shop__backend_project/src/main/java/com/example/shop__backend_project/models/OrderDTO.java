package com.example.shop__backend_project.models;

import com.example.shop__backend_project.enums.DiscountEnum;

import java.time.LocalDate;

public class OrderDTO {
    private long productId;
    private long customerId;
    private LocalDate dateOfPurchase;


    public OrderDTO(long productId, long customerId, LocalDate dateOfPurchase){
        this.productId = productId;
        this.customerId = customerId;
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

    public LocalDate getDateOfPurchase() {
        return dateOfPurchase;
    }

    public void setDateOfPurchase(LocalDate dateOfPurchase) {
        this.dateOfPurchase = dateOfPurchase;
    }
}