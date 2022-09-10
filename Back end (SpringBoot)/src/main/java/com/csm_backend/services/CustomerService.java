package com.csm_backend.services;

import com.csm_backend.exception.CustomerNotFoundException;
import com.csm_backend.model.Customer;
import com.csm_backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @PostConstruct
    public void init() {

        Customer cust1 = new Customer(1001, "Sakshi Oswal", "sakshi.oswal@gmail.com", 1000000001);
        Customer cust2 = new Customer(1002, "Aashi Gangrade", "aashi.gangrade@gmail.com", 1000000002);
        Customer cust3 = new Customer(1003, "Aakansha Solanki", "aakansha.solanki@gmail.com", 1000000003);
        Customer cust4 = new Customer(1004, "Anjali Bundela", "anjali.bundela@gmail.com", 1000000004);
        Customer cust5 = new Customer(1005, "Shruti Patel", "shruti.patel@gmail.com", 1000000005);
        List<Customer> customers = new ArrayList<>();
        customers.add(cust1);
        customers.add(cust2);
        customers.add(cust3);
        customers.add(cust4);
        customers.add(cust5);
        addAllCustomers(customers);
    }

    public Customer addAndEditCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer getCustomerByID(int id) {
        return customerRepository.findById(id).orElseThrow(() -> new
                CustomerNotFoundException("Customer with id : " + id + " not found"));
    }

    public List<Customer> addAllCustomers(List<Customer> customers) {
        return customerRepository.saveAll(customers);
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
