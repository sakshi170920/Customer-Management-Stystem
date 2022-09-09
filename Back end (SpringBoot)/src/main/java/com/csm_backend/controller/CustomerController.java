package com.csm_backend.controller;

import com.csm_backend.model.Customer;
import com.csm_backend.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // Add new customer
    @PostMapping("/addCustomer")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    // Add more than 1 customer
    @PostMapping("/addCustomers")
    public List<Customer> addAllCustomers(@RequestBody List<Customer> customers) {
        return customerService.addAllCustomers(customers);
    }

    // Get customer by Id
    @GetMapping("/getCustomerByID/{id}")
    public Customer getCustomerById(@PathVariable int id) {
        return customerService.getCustomerByID(id);
    }

    // Get customer by name
    @GetMapping("/getCustomerByName/{name}")
    public  Customer getCustomerByName(@PathVariable String name) {
        return  customerService.getCustomerByName(name);
    }

    // Update customer
    @PutMapping("/updateCustomer")
    public Customer updateCustomer(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }

    // Delete customer
    @DeleteMapping("/deleteCustomerById/{id}")
    public boolean deleteCustomerByID(@PathVariable int id) {
        return customerService.deleteCustomerByID(id);
    }

    // Get all customer
    @GetMapping("/getAll")
    public List<Customer> getAllCustomer() {
        return customerService.getAllCustomers();
    }
}
