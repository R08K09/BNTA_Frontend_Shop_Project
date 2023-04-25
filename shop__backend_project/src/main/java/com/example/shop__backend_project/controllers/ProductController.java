package com.example.shop__backend_project.controllers;

import com.example.shop__backend_project.models.Product;
import com.example.shop__backend_project.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("products")
public class ProductController {

    @Autowired
    ProductService productService;

//    Display all product details
//    @GetMapping
//    public ResponseEntity<List<Product>> getAllProducts(){
//        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
//    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable Long id){
        return new ResponseEntity(productService.findProductById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProductsAndFilters(
            @RequestParam(required = false, name = "category") String category,
            @RequestParam(required = false, name = "colour") String colour
    ){
        //    Get vehicle by category
        if (category != null){
            return new ResponseEntity<>(productService.findAllProductsByCategory(category), HttpStatus.OK);
        }
//        Get all vehicle by colour
        if (colour != null){
            return new ResponseEntity<>(productService.findAllProductsByColour(colour), HttpStatus.OK);
        }
//        Get all products
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }
}
