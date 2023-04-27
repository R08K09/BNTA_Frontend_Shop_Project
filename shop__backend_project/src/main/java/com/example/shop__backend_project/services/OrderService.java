package com.example.shop__backend_project.services;

import com.example.shop__backend_project.enums.DiscountEnum;
import com.example.shop__backend_project.models.Customer;
import com.example.shop__backend_project.models.Order;
import com.example.shop__backend_project.models.OrderDTO;
import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.repositories.CustomerRepository;
import com.example.shop__backend_project.repositories.OrderRepository;
import com.example.shop__backend_project.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ProductRepository productRepository;

//    public Order executeOrder(Long customerId, Long productId){
//        Customer targetCustomer = customerRepository.findById(customerId).get();
//        Product targetOrder = productRepository.findById(productId).get();
//
//    }
        //getFinalPrice
    //then set orderTotal as getFinalPrice

    public int getFinalPrice(DiscountEnum discount, Long id) {
        // if discount = null, return the original price
        // get the price from the product
        Product productByDiscount = productRepository.findById(id).get();
        if (discount == null) {
            return productByDiscount.getPrice();
        } else {
            int moneyOff = (productByDiscount.getPrice() * (discount.getDiscount()) / 100);
            return productByDiscount.getPrice() - moneyOff;
        }
    }

    public List<Order>findAll() {
        return orderRepository.findAll();
    }
//    public void saveOrder(OrderDTO orderDTO){
//        Order order = new Order(orderDTO.getCustomerId(), orderDTO.getProductId(),orderDTO.getOrderTotal(), orderDTO.getDateOfPurchase(),orderDTO.getDiscountEnum());
//    }
}
