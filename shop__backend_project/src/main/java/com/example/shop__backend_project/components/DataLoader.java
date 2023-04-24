package com.example.shop__backend_project.components;

import com.example.shop__backend_project.models.Customer;
import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.repositories.CustomerRepository;
import com.example.shop__backend_project.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CustomerRepository customerRepository;
    public DataLoader(){}
    @Override
    public void run(ApplicationArguments args) throws Exception {
        Product boat = new Product("Fair Seas", "Blue and white", "Boat", 5000000);
        productRepository.save(boat);
        Product car = new Product("Fancy car", "Gold", "Car", 10000000);
        productRepository.save(car);

//        Customer fiona = new Customer("Fiona", "fiona@bnta.com");
//        customerRepository.save(fiona);
//        Customer theo = new Customer("Theo", "Theo@bnta.com");
//        customerRepository.save(theo);
//        Customer subrina = new Customer("Subrina", "subrina@bnta.com");
//        customerRepository.save(subrina);
//        Customer kelly = new Customer("Kelly", "kelly@bnta.com");
//        customerRepository.save(kelly);


    }
}
