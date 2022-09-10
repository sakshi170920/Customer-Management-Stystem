import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerClientService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:9091/";

  addAndEditCustURL = this.baseUrl + 'addAndEditCustomer';
  getCustURL = this.baseUrl +'getAll';
  deleteCustUrl = this.baseUrl +'deleteCustomerById';


  addAndEditCustomer(customer : Customer): Observable<Customer> {
    return this.http.post<Customer>(this.addAndEditCustURL,customer);
  }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.getCustURL);
  }

  deleteCustomer(customer : Customer) : Observable<Customer> {
    return this.http.delete<Customer>(this.deleteCustUrl+'/'+customer.id);
  }


}
