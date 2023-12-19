package com.minhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhtrung.backend.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    
}
