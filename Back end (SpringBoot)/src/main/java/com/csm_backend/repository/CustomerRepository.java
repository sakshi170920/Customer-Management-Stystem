package com.csm_backend.repository;


import com.csm_backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    Customer getByName(String name);

    Customer findByName(String name);
}
