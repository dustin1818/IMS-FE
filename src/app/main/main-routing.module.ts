import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { InventoryComponent } from '../components/inventory/inventory.component';
import { SupplierComponent } from '../components/supplier/supplier.component';
import { SupplierModal } from '../components/supplier-modal/supplier-modal.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { HelpComponent } from '../components/help/help.component';


//guards
import { AuthGuard } from '../guard/auth.guard';
import { NotAuthGuard } from '../guard/notAuth.guard';
import { AboutComponent } from '../components/about/about.component';



// lazy loading routes
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

      //inventory
      { path: 'inventory', component: InventoryComponent, canActivateChild: [AuthGuard] },

      //supplier
      { path: 'supplier-list', component: SupplierComponent, canActivateChild: [AuthGuard], },
      { path: 'supplier-list/supplier-modal', component: SupplierModal, canActivateChild: [AuthGuard] },
      { path: 'supplier-list/supplier-modal/:id', component: SupplierModal, canActivateChild: [AuthGuard] },

      { path: 'profile', component: ProfileComponent, canActivateChild: [AuthGuard] },

      //help and about
      { path: 'help', component: HelpComponent, canActivateChild: [AuthGuard] },
      { path: 'about', component: AboutComponent, canActivateChild: [AuthGuard] },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
