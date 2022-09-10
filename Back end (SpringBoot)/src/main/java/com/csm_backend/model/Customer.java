package com.csm_backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    private int id;
    private String name;
    @Column(unique = true)
    private String email;
    @Column(length = 10,unique = true)
    private long mobile_number;
}
