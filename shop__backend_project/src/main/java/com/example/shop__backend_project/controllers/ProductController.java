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

    @PutMapping(value = "/{id}")
    public ResponseEntity<Product> updateProduct(
            @RequestBody Product product,
            @PathVariable Long id
    ){
        Product updatedProduct = productService.updateProduct(product, id);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);

    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<Product>> postProduct(@RequestBody Product product){
        productService.save(product);
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.CREATED);
    }

}
