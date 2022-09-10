package com.csm_backend.services;

import com.csm_backend.exception.CustomerNotFoundException;
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
        return customerRepository.findById(id).orElseThrow(() -> new
                CustomerNotFoundException("Customer with id : " + id + " not found"));
    }

    public List<Customer> getCustomerByName(String name) {
        return customerRepository.findByName(name);
    }

    public boolean deleteCustomerByID(int id) {
        if (!customerRepository.existsById(id))
            throw new CustomerNotFoundException("Customer with id : " + id + " does not exist");
        customerRepository.deleteById(id);
        return !customerRepository.existsById(id);

    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}
