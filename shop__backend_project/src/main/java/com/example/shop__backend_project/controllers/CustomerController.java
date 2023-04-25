package com.example.shop__backend_project.controllers;

import com.example.shop__backend_project.models.Customer;

import com.example.shop__backend_project.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
=======
import com.example.shop__backend_project.repositories.CustomerRepository;
import com.example.shop__backend_project.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

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

//    DELETE customer by id
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deleteCustomer(@PathVariable Long id){
        customerService.deleteCustomer(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

//    Add new customer
    @PostMapping
    public ResponseEntity<Customer> addNewCustomer (@RequestBody Customer customer) {
        Customer newCustomer = customerService.addNewCustomer(customer);
        return new ResponseEntity<>(newCustomer, HttpStatus.CREATED);

//    Add new customer
    @PostMapping
    public ResponseEntity<Customer> addNewCustomer (@RequestBody Customer customer){
        Customer newCustomer = customerService.addNewCustomer(customer);
        return  new ResponseEntity<>(newCustomer, HttpStatus.CREATED);
}
    @Autowired
    CustomerRepository customerRepository;

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);

    }

        @Autowired
        CustomerRepository customerRepository;

        @GetMapping
        public ResponseEntity<List<Customer>> getAllCustomers () {
            return new ResponseEntity<>(customerRepository.findAll(), HttpStatus.OK);
        }

}
