package com.csm_backend.services;

import com.csm_backend.model.Customer;
import com.csm_backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer addAndEditCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer getCustomerByID(int id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer getCustomerByName(String name) {
        return  customerRepository.findByName(name);
    }

    public boolean deleteCustomerByID(int id) {
        Customer existingCustomer = customerRepository.getById(id);
        if(existingCustomer != null) {
            customerRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}
