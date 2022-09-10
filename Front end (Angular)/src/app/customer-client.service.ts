import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerClientService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:9091/";

  addCustURL = this.baseUrl + 'addCustomer';
  getCustURL = this.baseUrl +'getAll';
  updateCustUrl = this.baseUrl +'updateCustomer';
  deleteCustUrl = this.baseUrl +'deleteCustomerById';


  addCustomer(customer : Customer): Observable<Customer> {
    return this.http.post<Customer>(this.addCustURL,customer);
  }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.getCustURL);
  }

  updateCustomer(customer :Customer) : Observable<Customer>{
    return this.http.put<Customer>(this.updateCustUrl, customer);
  }

  deleteCustomer(customer : Customer) : Observable<Customer> {
    return this.http.delete<Customer>(this.deleteCustUrl+'/'+customer.id);
  }
}
