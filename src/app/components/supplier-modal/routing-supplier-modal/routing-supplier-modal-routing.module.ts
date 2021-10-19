import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierModal } from '../supplier-modal.component';

const routes: Routes = [
  { path: '', component: SupplierModal },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingSupplierModalRoutingModule { }
