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

    @Autowired
    CustomerService customerService;

    @Autowired
    ProductService productService;

//    public Order executeOrder(Long customerId, Long productId){
//        Customer targetCustomer = customerRepository.findById(customerId).get();
//        Product targetOrder = productRepository.findById(productId).get();
//
//    }
        //getFinalPrice
    //then set orderTotal as getFinalPrice

    public int getFinalPrice(Customer customer, Product product) {
        int discount = customer.getDiscountCategory().getDiscount();
        int productPrice = product.getPrice();
        int orderTotal = productPrice - (productPrice * (discount/100));
        return orderTotal;
    }

    public List<Order>findAll() {
        return orderRepository.findAll();
    }


    public void saveOrder(OrderDTO orderDTO){
        Customer customer = customerService.findCustomerById(orderDTO.getCustomerId());
        Product product = productService.findProductById(orderDTO.getProductId());
        int orderTotal = getFinalPrice(customer, product);
        Order order = new Order(product, customer, orderDTO.getDateOfPurchase(), orderTotal);
        orderRepository.save(order);
    }

}
