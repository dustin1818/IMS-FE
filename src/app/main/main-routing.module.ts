import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { InventoryComponent } from '../components/inventory/inventory.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { SupplierComponent } from '../components/supplier/supplier.component';


const routes: Routes = [

  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'inventory', component:InventoryComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'supplier', component:SupplierComponent},
  {path: '**', component:DashboardComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
