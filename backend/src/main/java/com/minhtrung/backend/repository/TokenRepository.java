package com.minhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhtrung.backend.entity.Token;

public interface TokenRepository extends JpaRepository<Token, Long> {
    
}
