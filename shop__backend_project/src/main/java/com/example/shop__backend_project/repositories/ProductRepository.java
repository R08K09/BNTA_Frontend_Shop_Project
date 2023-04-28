package com.example.shop__backend_project.repositories;

import com.example.shop__backend_project.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

//    Find all products by category
    List<Product> findByCategory(String category);

    List<Product> findByColour(String colour);

    List<Product> findByIsSold(Boolean isSold);
}
