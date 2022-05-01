package com.example.ApparelStoreBackend;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private final ProductRepository repository;

    ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    // AGGREGATE ROOT
    // TAG :: get-aggregate-root[]
    @GetMapping("/products")
    List<Product> all() {
        System.out.println("[GET REQUEST] => PROCESSING ...");
        List<Product> list = new ArrayList<>(repository.findAll());
        for (Product product : list) {
            System.out.println(product);
        }
        return repository.findAll();
    }

    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct) {
        System.out.println("[POST REQUEST] => PROCESSING ...\t:\tOBJECT RECIEVED\t\t\t: " + newProduct);
        return repository.save(newProduct);
    }

    @GetMapping("/products/{id}")
    Product one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PutMapping("/products/{id}")
    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return repository.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setPrice(newProduct.getPrice());
                    return repository.save(product);
                })
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return repository.save(newProduct);
                });
    }

    @DeleteMapping("/products/{id}")
    void DeleteMapping(@PathVariable Long id) {
        repository.deleteById(id);
    }

}