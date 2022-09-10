import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../Customer';
import { CustomerClientService } from '../customer-client.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {


  constructor(public _customerClient:CustomerClientService) { }

  customerList:Array<Customer>=[];

  fetchData(){
    this._customerClient.getAllCustomers().subscribe(
      data => {
        
        this.customerList=data;
      }

  )
  }

  ngOnInit(): void {
    this.fetchData();
  }


  deleteCustomer(customer:Customer){
    
    if(confirm("Sure to delete?")){

    this._customerClient.deleteCustomer(customer).subscribe(
      data=> {
        alert("Deleted Successfully!!")
        this.fetchData()
      }
    )
  }
}

}
