import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-inventory-modal',
  templateUrl: './inventory-modal.component.html',
  styleUrls: ['./inventory-modal.component.css']
})
export class InventoryModalComponent implements OnInit {

  productform: FormGroup
  id: string | null;

  productOptions = ['Can', 'Glass', 'Plastic']

  constructor(private fb:FormBuilder,
              private _productService: ProductService ,
              private toastr: ToastrService,
              private location: Location      
              ) 
    {
      this.productform = this.fb.group({
        product_name: ['', Validators.required],
        product_type: ['', Validators.required],
        quantity: ['', Validators.required],
        price: ['', Validators.required],
      })
      console.log(this.productform)
    }

  ngOnInit(): void {
  }

  addProduct(){
    const PRODUCT:Product = {
      product_name: this.productform.get('product_name').value,
      product_type: this.productform.get('product_type').value,
      quantity: this.productform.get('quantity').value,
      price: this.productform.get('price').value,
      _id: ''
    }

  console.log(PRODUCT)
  this._productService.addProducts(PRODUCT).subscribe(data => {
  console.log(data)
  this.toastr.success('Product added succesfully!', 'Product added!', {
    positionClass:'toast-bottom-right',
    tapToDismiss:true

  })
  this.location.back()
    
  }, error => {
    console.log(error);
    this.productform.reset()
  })
}

return(){
  this.location.back();
}



}
