package com.example.shop__backend_project.controllers;

import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.services.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("products")
public class ProductController {

    @Autowired
    ProductService productService;

//    Display all product details
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(){
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable Long id){
        return new ResponseEntity(productService.findProductById(id), HttpStatus.OK);
    }
}
