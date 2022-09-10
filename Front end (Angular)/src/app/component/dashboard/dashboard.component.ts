import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { CustomerClientService } from 'src/app/customer-client.service';
import { Customer } from 'src/app/model/customer';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit(): void {
    this.fetchData();

  }

  constructor(private  customerClientService: CustomerClientService) { }


  addCustomer(customer:Customer){
    this.customerClientService.addCustomer(customer).subscribe(
      // data => this._router.navigate(['/view-customer'])
    )
  }

  customerList:Array<Customer>=[];

  fetchData(){
    this.customerClientService.getAllCustomers().subscribe(
      data => {
        
        this.customerList=data;
      }

  )
  }



  deleteCustomer(customerId:number){
    
    if(confirm("Sure to delete?")){

    this.customerClientService.deleteCustomer(customerId).subscribe(
      data=> {
        alert("Deleted Successfully!!")
        this.fetchData()
      }
    )

  }
}


}
