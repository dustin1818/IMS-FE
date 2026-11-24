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
  filterTerm = '';
  listState: 'loading' | 'ready' | 'error' = 'loading';
  supplierList: Supplier[] = [];

  p:number = 1;

  constructor(private _supplierService: SupplierService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSupplier();
  }



  getSupplier() {
    this._supplierService.getSupplier().subscribe(data => {
      console.log(data);
      this.supplierList = data;
      this.listState = 'ready';
    }, error => {
      this.listState = 'error';
      console.log(error);
    })
  }


  deleteSupplier(id: any) {
    let confirmation = confirm("Are you sure you want to delete this supply?")
    if(!confirmation){
      return
    }
    this._supplierService.deleteSupplier(id).subscribe(data => {
      this.toastr.error('Supplier has been removed!', 'Supplier Deleted.', {
        positionClass:'toast-bottom-right',
        tapToDismiss:true
      });
      this.getSupplier();
    }, error => {
      console.log(error);
    })
  }
}
