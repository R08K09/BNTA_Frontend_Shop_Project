package com.example.shop__backend_project.services;

import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;


    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    public Product findProductById(Long id) {
        return productRepository.findById(id).get();
    }


    public List<Product> findAllProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> findAllProductsByColour(String colour) {
        return productRepository.findByColour(colour);
    }
}
