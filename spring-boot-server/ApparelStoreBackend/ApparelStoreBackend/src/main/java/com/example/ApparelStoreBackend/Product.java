package com.example.ApparelStoreBackend;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {
    
    private @Id @GeneratedValue long id;
    private String name;
    private int price;

    Product () {}

    Product (String name, int price) {
        this.name = name;
        this.price = price;
    }

    public long getId () {
        return this.id;
    }

    public String getName () {
        return this.name;
    }

    public int getPrice () {
        return this.price;
    }

    public void setId (long id) {
        this.id = id;
    }

    public void setName (String name) {
        this.name = name;
    }

    public void setPrice (int price) {
        this.price = price;
    }

    @Override
    public boolean equals (Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Product))
            return false;
        
        Product product = (Product) o;
        return Objects.equals(this.id, product.id) && Objects.equals(this.name, product.name) && Objects.equals(this.price, product.price);
    }

    @Override
    public int hashCode () {
        return Objects.hash(this.id, this.name, this.price);
    }

    public String toString () {
        return "Employee {" + "id=" + this.id + ", name='" + this.name + '\'' + ", price='" + this.price + '\'' + '}';
    } 
}
