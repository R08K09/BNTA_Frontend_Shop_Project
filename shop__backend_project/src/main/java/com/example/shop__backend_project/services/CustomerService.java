package com.example.shop__backend_project.services;

import com.example.shop__backend_project.models.Customer;
import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }


    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }

    public Customer addNewCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
