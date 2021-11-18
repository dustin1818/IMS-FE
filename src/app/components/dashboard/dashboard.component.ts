import { Component, OnInit } from '@angular/core';
import { sample } from 'rxjs/operators';
import { Employee } from 'src/app/models/employee';
import { Order } from 'src/app/models/orders';
import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { ProductService } from 'src/app/services/product/product.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { AuthenticationService } from 'src/app/services/user-authentication/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orderName: any;

  userProfile = {};
  employeeList: Employee[] = [];
  supplierList: Supplier[] = [];
  orderList: Order[] = [];
  productList: Product[] = []

  constructor(
    public _userService: AuthenticationService,
    public _employeeService: EmployeeService,
    public _supplierService: SupplierService,
    public _productService: ProductService
  ) { }

  ngOnInit(): void {
    
    //username
    this._userService.getUserProfile().subscribe( profileName => {
      this.userProfile = profileName
    }, error => {
      console.log(error)
    })

    //employee
    this._employeeService.getEmployee().subscribe( employeeCount => {
      this.employeeList = employeeCount.length
    }, error => {
      console.log(error)
    })

    //supplier
    this._supplierService.getSupplier().subscribe( supplierCount => {
      this.supplierList = supplierCount.length
    }, error => {
      console.log(error)
    })

    this._productService.getOrders().subscribe(
      (orderList) => {
        this._productService.orders = orderList as Order [];
        this.orderName = this._productService.orders.length
      });

    this._productService.getProducts().subscribe(
      (sampleProductList) => {
        this.productList = sampleProductList.payload.length
        console.log(this.productList)
      }, error => {
        console.log(error)
      });
  }

}
