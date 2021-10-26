import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  filterTerm: any;
  supplierList: Supplier[] = [];

  p:number = 1;

  constructor(private _supplierService: SupplierService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSupplier();
    this.searchFilter();
  }

  searchFilter() {
    this._supplierService.getSupplier().subscribe(filterTerm => {
      console.log(filterTerm);
      this.supplierList = filterTerm
    })
  }


  getSupplier() {
    this._supplierService.getSupplier().subscribe(data => {
      console.log(data);
      this.supplierList = data;
    }, error => {
      console.log(error);
    })
  }


  deleteSupplier(id: any) {
    this._supplierService.deleteSupplier(id).subscribe(data => {
      this.toastr.error('Supplier has been removed!', 'Supplier Deleted.');
      this.getSupplier();
    }, error => {
      console.log(error);
    })
  }
}
