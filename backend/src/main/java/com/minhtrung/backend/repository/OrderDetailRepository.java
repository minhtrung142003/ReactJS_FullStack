package com.minhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhtrung.backend.entity.OrderDetail;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    
}
