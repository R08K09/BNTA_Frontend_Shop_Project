package com.example.shop__backend_project.controllers;

import com.example.shop__backend_project.models.Customer;
<<<<<<< HEAD
=======
import com.example.shop__backend_project.repositories.CustomerRepository;
>>>>>>> develop
import com.example.shop__backend_project.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
=======
import org.springframework.web.bind.annotation.GetMapping;
>>>>>>> develop
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

//    Add new customer
    @PostMapping
    public ResponseEntity<Customer> addNewCustomer (@RequestBody Customer customer){
        Customer newCustomer = customerService.addNewCustomer(customer);
        return  new ResponseEntity<>(newCustomer, HttpStatus.CREATED);

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
    }
}
