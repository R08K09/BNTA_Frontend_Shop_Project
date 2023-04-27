package com.example.shop__backend_project.models;

import com.example.shop__backend_project.enums.DiscountEnum;

import java.time.LocalDate;

public class OrderDTO {
    private long productId;
    private long customerId;
    private int orderTotal;

    private LocalDate dateOfPurchase;
    private DiscountEnum discountEnum;


    public OrderDTO(long productId, long customerId, int orderTotal, LocalDate dateOfPurchase, DiscountEnum discountEnum){
        this.productId = productId;
        this.customerId = customerId;
        this.orderTotal = orderTotal;
        this.dateOfPurchase = dateOfPurchase;
        this.discountEnum = discountEnum;
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

    public DiscountEnum getDiscountEnum() {
        return discountEnum;
    }

    public void setDiscountEnum(DiscountEnum discountEnum) {
        this.discountEnum = discountEnum;
    }
}