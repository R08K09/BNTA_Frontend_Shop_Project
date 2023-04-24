package com.example.shop__backend_project.repositories;

import com.example.shop__backend_project.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository <Long, Customer>{
}
