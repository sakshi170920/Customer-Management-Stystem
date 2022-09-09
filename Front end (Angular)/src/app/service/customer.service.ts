import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:9091/addCustomer';
    this.getEmpURL = 'http://localhost:9091/getAll';
    this.updateEmpUrl = 'http://localhost:9091/updateCustomer';
    this.deleteEmpUrl = 'http://localhost:9091/deleteCustomerById';

   }

   addCustomer(customer : Customer): Observable<Customer> {
     return this.http.post<Customer>(this.addEmpURL,customer);
   }

   getAllCustomer(): Observable<Customer[]>{
     return this.http.get<Customer[]>(this.getEmpURL);
   }

   updateCustomer(customer :Customer) : Observable<Customer>{
     return this.http.put<Customer>(this.updateEmpUrl, customer);
   }

   deleteCustomer(customer : Customer) : Observable<Customer> {
     return this.http.delete<Customer>(this.deleteEmpUrl+'/'+customer.id);
   }
  

}
