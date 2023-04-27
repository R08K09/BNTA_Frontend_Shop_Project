package com.example.shop__backend_project.components;

import com.example.shop__backend_project.enums.DiscountEnum;
import com.example.shop__backend_project.models.Customer;
import com.example.shop__backend_project.models.Order;
import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.repositories.CustomerRepository;
import com.example.shop__backend_project.repositories.OrderRepository;
import com.example.shop__backend_project.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;
    public DataLoader(){}
    @Override
    public void run(ApplicationArguments args) throws Exception {
        Product fairSeas = new Product("Fair Seas", "Blue and white", "Boat", 5000000, true);
        productRepository.save(fairSeas);
        Product fancyCar = new Product("Fancy car", "Gold", "Car", 10000000, true);
        productRepository.save(fancyCar);
        Product concord = new Product("Concord","White","Plane",1000000000, false);
        productRepository.save(concord);

        Customer fiona = new Customer("Fiona", "fiona@bnta.com");
        customerRepository.save(fiona);
        Customer theo = new Customer("Theo", "Theo@bnta.com");
        customerRepository.save(theo);
        Customer subrina = new Customer("Subrina", "subrina@bnta.com");
        customerRepository.save(subrina);
        Customer kelly = new Customer("Kelly", "kelly@bnta.com");
        customerRepository.save(kelly);

        fairSeas.setCustomer(fiona);
        fancyCar.setCustomer(theo);
//        concord.setCustomer(subrina);

        productRepository.save(fairSeas);
        productRepository.save(fancyCar);
//      productRepository.save(concord);

        Order order1 = new Order(LocalDate.of(2023,04,26), DiscountEnum.STUDENT, 10000);



        orderRepository.save(order1);
    }
}
