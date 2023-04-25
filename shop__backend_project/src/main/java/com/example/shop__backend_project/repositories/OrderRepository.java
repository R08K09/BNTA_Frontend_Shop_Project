package com.example.shop__backend_project.repositories;

import com.example.shop__backend_project.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
