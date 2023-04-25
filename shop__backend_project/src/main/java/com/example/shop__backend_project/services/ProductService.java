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

    public Product updateProduct(Product product, Long id) {
//        find the product to update by id
        Product productToUpdate = productRepository.findById(id).get();
//        Option to change product information
        productToUpdate.setName(product.getName());
        productToUpdate.setCategory(product.getCategory());
        return productRepository.save(product);
    }
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }

    public  Product save(Product product) {
        productRepository.save(product);
        return product;
    }
}
