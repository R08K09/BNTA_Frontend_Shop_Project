package com.example.shop__backend_project.controllers;

import com.example.shop__backend_project.models.Customer;
import com.example.shop__backend_project.models.Order;
import com.example.shop__backend_project.models.OrderDTO;
import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.services.CustomerService;
import com.example.shop__backend_project.services.OrderService;
import com.example.shop__backend_project.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/orders"})
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    CustomerService customerService;

    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity <List<Order>> getAllOrders(){
        return new ResponseEntity<>(orderService.findAll(), HttpStatus.OK);
    }

//    @PostMapping()
//    public ResponseEntity<Customer> addProductToCustomer(@RequestParam Long productId, @RequestParam Long customerId, @RequestBody OrderDTO orderDTO){
////    long productId = product.getId();
//        Customer customerWithProduct = customerService.addProductToCustomer(customerId, productId);
//        Product productSold = productService.findProductById(productId);
//        productSold.setCustomer(customerWithProduct);
//        productService.isProductSold(productSold, productId);
//        orderService.saveOrder(orderDTO);
//        return new ResponseEntity<>(customerWithProduct, HttpStatus.OK);
//    }
}
