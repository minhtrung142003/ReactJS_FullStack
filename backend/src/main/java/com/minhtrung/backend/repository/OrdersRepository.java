package com.minhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhtrung.backend.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    
}
