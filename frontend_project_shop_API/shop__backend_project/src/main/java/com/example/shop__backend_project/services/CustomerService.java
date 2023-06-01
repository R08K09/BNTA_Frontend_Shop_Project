package com.example.shop__backend_project.services;

import com.example.shop__backend_project.models.Customer;
import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ProductService productService;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer findCustomerById(Long id) {
        return customerRepository.findById(id).get();
    }

    public Customer updateCustomer(Customer customer, Long id) {
        Customer updatedCustomer = customerRepository.findById(id).get();
        updatedCustomer.setName(customer.getName());
        updatedCustomer.setEmail(customer.getEmail());
        updatedCustomer.setDiscountCategory(customer.getDiscountCategory());
        return customerRepository.save(updatedCustomer);
    }
    public void deleteCustomer (Long id){
        customerRepository.deleteById(id);
        }

        public Customer addNewCustomer (Customer customer){
            return customerRepository.save(customer);
        }

    public Customer addProductToCustomer(long customerId, long productId) {
        Customer customer = customerRepository.findById(customerId).get();
        Product product = productService.findProductById(productId);
        List<Product>products = customer.getProducts();
        products.add(product);
        customer.setProducts(products);
//        productService.isProductSold
        customerRepository.save(customer);
        return customer;
    }

    public Customer buyProduct(long customerId, long productId) {

        Customer customerToBuy = findCustomerById(customerId);
        Product productToSell = productService.findProductById(productId);


        productToSell.setCustomer(customerToBuy);
        productToSell.setSold(true);

        productService.save(productToSell);
        return customerToBuy;
    }

}
