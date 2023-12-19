package com.minhtrung.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.minhtrung.backend.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
}
