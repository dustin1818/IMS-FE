import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { WelcomeComponent } from '../components/register/welcome/welcome.component';
import { SigninComponent } from '../components/register/signin/signin.component';
import { SignupComponent } from '../components/register/signup/signup.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EmployeeComponent } from '../components/employee-container/employee/employee.component';
import { EmployeeModalComponent } from '../components/employee-container/employee-main/employee-modal/employee-modal.component';
import { InventoryComponent } from '../components/inventory-main/inventory/inventory.component';
import { InventoryModalComponent } from '../components/inventory-main/add-inventory/inventory-modal.component';
import { EditInventoryComponent } from '../components/inventory-main/edit-inventory/edit-inventory.component';
import { SupplierComponent } from '../components/supplier-main/supplier/supplier.component';
import { SupplierModal } from '../components/supplier-main/modal-supplier/supplier-modal.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { HelpComponent } from '../components/help/help.component';
import { AboutComponent } from '../components/about/about.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';


//guards
import { AuthGuard } from '../guard/auth.guard';
import { NotAuthGuard } from '../guard/notAuth.guard';


const routes: Routes = [

  {
    // first route to popin after running host
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [NotAuthGuard]
  },

  //registration route 1st step
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [NotAuthGuard]
  },


  //main route sidebar,dashboard etc.
  {
    path: 'user/mainbar',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      //dashboard
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivateChild: [AuthGuard] },

      //employee
      { path: 'employee', component: EmployeeComponent, canActivateChild: [AuthGuard] },
      { path: 'employee/employee-modal', component: EmployeeModalComponent, canActivateChild: [AuthGuard] },
      { path: 'employee/employee-modal/:id', component: EmployeeModalComponent, canActivateChild: [AuthGuard] },

      //inventory
      { path: 'inventory', component: InventoryComponent, canActivateChild: [AuthGuard] },
      { path: 'inventory/product-modal', component: InventoryModalComponent, canActivateChild: [AuthGuard] },
      { path: 'inventory/product-modal/:id', component: EditInventoryComponent, canActivateChild: [AuthGuard] },

      //supplier
      { path: 'supplier-list', component: SupplierComponent, canActivateChild: [AuthGuard], },
      { path: 'supplier-list/supplier-modal', component: SupplierModal, canActivateChild: [AuthGuard] },
      { path: 'supplier-list/supplier-modal/:id', component: SupplierModal, canActivateChild: [AuthGuard] },

      { path: 'profile', component: ProfileComponent, canActivateChild: [AuthGuard] },

      //help and about
      { path: 'help', component: HelpComponent, canActivateChild: [AuthGuard] },
      { path: 'about', component: AboutComponent, canActivateChild: [AuthGuard] },

      {
        path: '**',
        pathMatch: 'full',
        component: ErrorPageComponent

      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
