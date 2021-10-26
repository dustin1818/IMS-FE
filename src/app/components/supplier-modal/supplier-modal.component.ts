import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-supplier-modal',
  templateUrl: './supplier-modal.component.html',
  styleUrls: ['./supplier-modal.component.css']
})
export class SupplierModal implements OnInit {

  //declaring variables
  supplierForm: FormGroup;
  title = 'Create Supplier';
  id: string | null;


  //constructor IMPORTS
  constructor(private fb: FormBuilder,
              private location: Location,
              private toastr: ToastrService,
              private _supplierService: SupplierService,
              private aRouter: ActivatedRoute) { 

        //Fields from FORMCONTROL()
        this.supplierForm = this.fb.group({
          supplier_no: ['', Validators.required],
          name: ['', Validators.required],
          phone_no: ['', Validators.required],
          location: ['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');
      }



    ngOnInit(): void {
      this.editSupplier();
    }


  //add Supplier
  addSupplier() {
    //Producto
    const SUPPLIER: Supplier = {
      supplier_no: this.supplierForm.get('supplier_no')?.value,
      name: this.supplierForm.get('name')?.value,
      phone_no: this.supplierForm.get('phone_no')?.value,
      location: this.supplierForm.get('location')?.value,
    }

    //edit supplier
    if(this.id !== null){
      this._supplierService.editSupplier(this.id, SUPPLIER).subscribe(data => {
        this.toastr.info('Supplier successfully edited !', 'Supplier Registered!');
        this.location.back()
      })
    }else{

      //add supplier
      console.log(SUPPLIER);
      this._supplierService.addSupplier(SUPPLIER).subscribe(data => {
        this.toastr.success('Supplier added succesfully!', 'Supplier Added!');
        this.location.back()
      }, error => {
        console.log(error);
        this.supplierForm.reset();
      })
    }

  
  }

  //edit Supplier function
  editSupplier() {
    if(this.id !== null) {
      this.title = 'Edit Supplier';
      this._supplierService.ugradeSupplier(this.id).subscribe(data => {
        this.supplierForm.setValue({
          supplier_no: data.supplier_no,
          name: data.name,
          phone_no: data.phone_no,
          location: data.location,
        })
      })
    }
  }

  //cancel button
  return(){
    this.location.back()
  }

}
