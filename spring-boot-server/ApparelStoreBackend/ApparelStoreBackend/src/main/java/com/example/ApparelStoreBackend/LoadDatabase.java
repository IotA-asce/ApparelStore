package com.example.ApparelStoreBackend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(ProductRepository repository) {
        return args -> {
            log.info("Preloading... " + repository.save(new Product("JJK Tshirt", 599)));
            log.info("Preloading... " + repository.save(new Product("Naruto Tshirt", 499)));
        };
    }

}
