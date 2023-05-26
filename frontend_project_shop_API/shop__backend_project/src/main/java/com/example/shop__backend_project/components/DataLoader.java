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

//        Boats
        Product squadron = new Product("Squadron", "White", "Boat", 5000000, false);
        productRepository.save(squadron);
        Product renegade = new Product("Renegade", "Black", "Boat", 10000000, false);
        productRepository.save(renegade);
        Product sunDeckSport = new Product("SunDeck Sport", "Blue", "Boat", 250000000, false);
        productRepository.save(sunDeckSport);

//        Cars
        Product aClass = new Product("A Class", "White", "Car", 70000000, false);
        productRepository.save(aClass);
        Product amgGt = new Product("AMG GT", "Black", "Car", 55000000, false);
        productRepository.save(amgGt);
        Product gClass = new Product("G Class", "Green", "Car", 10000000, false);
        productRepository.save(gClass);

//        Planes
        Product plane737 = new Product("737 Max","turquoise","Plane",1000000000, false);
        productRepository.save(plane737);
        Product plane777 = new Product("777","Grey","Plane",1500000000, false);
        productRepository.save(plane777);
        Product plane787 = new Product("787","Violet","Plane",2000000000, false);
        productRepository.save(plane787);






        Customer fiona = new Customer("Fiona", "fiona@bnta.com", DiscountEnum.STUDENT);
        customerRepository.save(fiona);
        Customer theo = new Customer("Theo", "Theo@bnta.com", DiscountEnum.HEALTHCARE);
        customerRepository.save(theo);
//        Customer subrina = new Customer("Subrina", "subrina@bnta.com");
//        customerRepository.save(subrina);
//        Customer kelly = new Customer("Kelly", "kelly@bnta.com");
//        customerRepository.save(kelly);

        squadron.setCustomer(fiona);
        aClass.setCustomer(theo);
        //concord.setCustomer(subrina);



        Order order1 = new Order(squadron, fiona,LocalDate.of(2023,04,26), 10000);
        Order order2 = new Order(aClass, theo, LocalDate.of(2023,04,26), 10000);
        orderRepository.save(order1);
        orderRepository.save(order2);
    }
}