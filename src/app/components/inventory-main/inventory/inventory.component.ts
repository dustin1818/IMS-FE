import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product';
import { Order } from '../../../models/orders';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  filterTerm = '';
  productList: Product[] = [];
  orderList: Order[] = [];
  sampleState: 'loading' | 'ready' | 'error' = 'loading';
  orderState: 'loading' | 'ready' | 'error' = 'loading';
  message = '';

  constructor(private _productService: ProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getOrders();
  }


  getProducts(){
    this._productService.getProducts().subscribe(data => {
      this.productList = data.payload;
      this.sampleState = 'ready';
    }, () => {
      this.sampleState = 'error';
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
        this.message = "Error in Removing Product."
        console.warn(error)
    });
  }

  
  //ORDERS
  getOrders(){
    this._productService.getOrders().subscribe((orders: Order[]) => {
      this.orderList = orders;
      this.orderState = 'ready';
    }, () => this.orderState = 'error');
  }

  goDown1() {
    document.getElementById("main-container").scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
