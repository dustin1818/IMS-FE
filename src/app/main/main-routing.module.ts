import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';


// lazy loading routes
const routes: Routes = [
  {
    path: 'signin',
    component:SigninComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: 'employee',
    loadChildren: () =>     import('../components/employee/routing-emp/routing-emp-routing.module')
      .then(m => m.RoutingEmpRoutingModule)
  },
  {
    path:'inventory',
    loadChildren: () =>     import('../../app/components/inventory/routing-inv/routing-inv-routing.module')
    .then(m => m.RoutingInvRoutingModule)
  },
  {
    path:'profile',
    loadChildren: () =>     import('../../app/components/profile/routing-prof/routing-prof-routing.module')
    .then(m => m.RoutingProfRoutingModule)
  },
  {
    path:'supplier-list',
    loadChildren: () =>     import('../../app/components/supplier/routing-supplier/routing-supplier-routing.module')
    .then(m => m.RoutingSupplierRoutingModule)
  },
  {
    path:'supplier-modal',
    loadChildren: () =>     import('../../app/components/supplier-modal/routing-supplier-modal/routing-supplier-modal-routing.module')
    .then(m => m.RoutingSupplierModalRoutingModule)
  },

  { 
    path: 'supplier-modal/:id', 
    loadChildren: () =>     import('../../app/components/supplier-modal/routing-supplier-modal/routing-supplier-modal-routing.module')
    .then(m => m.RoutingSupplierModalRoutingModule)
  },
  { 
    path: 'dashboard', 
    loadChildren: () =>     import('../../app/components/dashboard/routing-dashboard/routing-dashboard-routing.module')
    .then(m => m.RoutingDashboardRoutingModule)
  },
  { 
    path: 'help', 
    loadChildren: () =>     import('../../app/components/help/routing-help/routing-help-routing.module')
    .then(m => m.RoutingHelpRoutingModule)
  },
  { 
    path: 'about', 
    loadChildren: () =>     import('../../app/components/about/routing-about/routing-about-routing.module')
    .then(m => m.RoutingAboutRoutingModule)
  },
];



// const routes: Routes = [

//   { path: 'signin', component: SigninComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'profile', component: ProfileComponent },
//   { path: 'inventory', component: InventoryComponent },
//   { path: 'employee', component: EmployeeComponent },
//   { path: 'supplier-list', component: SupplierComponent },
//   { path: 'supplier-modal', component: SupplierModal },
//   { path: 'editar-producto/:id', component: SupplierModal },
//   { path: '**', component: DashboardComponent, pathMatch: 'full' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
