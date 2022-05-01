package com.example.ApparelStoreBackend;

/**
 * ProductNotFoundException
 */
public class ProductNotFoundException extends RuntimeException{

    ProductNotFoundException(long id) {
        super("Could not find employee" + id);
    }
    
}