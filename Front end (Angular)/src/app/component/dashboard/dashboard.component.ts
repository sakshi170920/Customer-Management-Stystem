import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Customer = new Customer();
  empList : Customer[] = [];

  constructor(private formBuilder : FormBuilder, private empService : CustomerService) { }

  ngOnInit(): void {

    this.getAllCustomer();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      number: [''],
      email: ['']
    });    

  }

  addCustomer() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.number = this.empDetail.value.number;
    this.empObj.email = this.empDetail.value.email;

    this.empService.addCustomer(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllCustomer();
    },err=>{
        console.log(err);
    });

  }

  getAllCustomer() {
    this.empService.getAllCustomer().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editCustomer(customer : Customer) {
    this.empDetail.controls['id'].setValue(customer.id);
    this.empDetail.controls['name'].setValue(customer.name);
    this.empDetail.controls['email'].setValue(customer.email);
    this.empDetail.controls['number'].setValue(customer.number);

  }

  updateCustomer() {

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.number = this.empDetail.value.number;
    this.empObj.email = this.empDetail.value.email;

    this.empService.updateCustomer(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllCustomer();
    },err=>{
      console.log(err);
    })

  }

  deleteCustomer(customer : Customer) {

    this.empService.deleteCustomer(customer).subscribe(res=>{
      console.log(res);
      alert('Customer deleted successfully');
      this.getAllCustomer();
    },err => {
      console.log(err);
    });

  }

}
