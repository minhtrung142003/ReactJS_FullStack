package com.minhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhtrung.backend.entity.Gallery;

public interface GalleryRepository extends JpaRepository<Gallery, Long> {
    
}
