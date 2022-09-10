package com.csm_backend.repository;


import com.csm_backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Customer getByName(String name);

    List<Customer> findByName(String name);
}
