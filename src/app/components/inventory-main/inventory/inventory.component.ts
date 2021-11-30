import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product';
import { Order } from '../../../models/orders';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  filterTerm: any;
  currentPage:1;
  productList : Product[] = []
  orderList: Order[]  = []
  p:number = 1;
  payload: any
  id: number
  messageClass:any
  message:any

  constructor(
    private scroller: ViewportScroller,
    public _productService:ProductService,
    private _supplierService: SupplierService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getOrders();
    console.log(this.getOrders());
  }

  searchFilter() {
    this._productService.getProducts().subscribe(filterTerm => {
      console.log(filterTerm);
      this.productList = filterTerm
    })
  }

  getProducts(){
    this._productService.getProducts().subscribe(data => {
      console.warn(data)
      this.productList = data.payload;  
    }, error =>{
    console.warn(error);
    })
  }

  

  deleteProduct(id: any){
    let confirmation = confirm("Are you sure you want to delete this product?")
    if(!confirmation){
      return
    }
    this._productService.deleteProduct(id).subscribe(data => {
        this.toastr.error('Product has been removed!', 'Product Deleted.', {
          progressAnimation:'decreasing',
          positionClass:'toast-bottom-right',
          tapToDismiss:true
        })
        this.getProducts()      
    }, error => {
        this.messageClass = "alert alert-danger"
        this.message = "Error in Removing Product."
        console.warn(error)
    });
  }

  
  //ORDERS
  getOrders(){
    this._productService.getOrders().subscribe(
      (res) =>{
      this._productService.orders = res as Order[];
    });
  }

  goDown1() {
    document.getElementById("main-container").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}

