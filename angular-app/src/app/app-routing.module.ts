import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'add-edit-customer', component:AddEditCustomerComponent},
  {path:'view-customer', component:ViewCustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
