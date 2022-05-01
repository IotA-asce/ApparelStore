package com.example.ApparelStoreBackend;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * ProductRepository
 */
public interface ProductRepository extends JpaRepository<Product, Long> {

}