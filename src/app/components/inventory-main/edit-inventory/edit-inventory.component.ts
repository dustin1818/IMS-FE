import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Location } from '@angular/common';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {

  form:FormGroup;
  id: number;

  productOptions = ['Glass', 'Can', 'Plastic']

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private toastr: ToastrService
    ) {}

    productForm = new FormGroup({
      'product_name': new FormControl('', Validators.required),
      'product_type': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
    })

   
   ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.productService.getSingleProduct(this.id).subscribe((product) =>
     {
        console.log(product,'Selected Updated')
        this.productForm.patchValue({
          'product_name': product.payload.product_name,
          'product_type': product.payload.product_type,
          'quantity': product.payload.quantity,
          'price': product.payload.price,
        })
      }
    )}


    submit():void{
      this.productService.updateProduct(this.id, this.productForm.getRawValue()).subscribe(
        () => {
          this.toastr.info('Product modification successful', 'Product edited!', {
            positionClass:'toast-bottom-right',
            tapToDismiss:true
          })
          this.location.back();
        }, error => {
          console.log(error);
          this.productForm.reset();
        }
      )
    }

    
    return(){
      this.location.back()
    }
}