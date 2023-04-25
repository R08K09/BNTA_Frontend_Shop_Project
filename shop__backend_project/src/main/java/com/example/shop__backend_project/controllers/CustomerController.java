package com.example.shop__backend_project.controllers;

import com.example.shop__backend_project.models.Customer;
import com.example.shop__backend_project.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PutMapping(value = "/{id}")
    public ResponseEntity<Customer> updatedCustomer(@RequestBody Customer customer, @PathVariable Long id){
        Customer updatedCustomer = customerService.updateCustomer(customer, id);
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }
}
