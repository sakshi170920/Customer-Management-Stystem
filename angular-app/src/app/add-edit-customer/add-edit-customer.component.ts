import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerClientService } from '../customer-client.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private _customerClient:CustomerClientService, private _router:Router) { }

  ngOnInit(): void {
  }

  addAndEditCustomer(customer:Customer){
    this._customerClient.addAndEditCustomer(customer).subscribe(
      data => this._router.navigate(['/view-customer'])
    )
  }

}
