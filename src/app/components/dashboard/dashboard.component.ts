import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/orders';
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
  userProfile = {};
  employeeCount: number;
  supplierCount: number;
  purchasedCount: number;
  private readonly previewLimit = 5;
  productCount: number;
  previewRows: (Product | null)[] = Array(this.previewLimit).fill(null);
  productsUnavailable = false;

  constructor(private users: AuthenticationService, private employees: EmployeeService,
              private suppliers: SupplierService, private inventory: ProductService) {}

  ngOnInit(): void {
    this.users.getUserProfile().subscribe(profile => this.userProfile = profile);
    this.employees.getEmployee().subscribe(employees => this.employeeCount = employees.length);
    this.suppliers.getSupplier().subscribe(suppliers => this.supplierCount = suppliers.length);
    this.inventory.getOrders().subscribe((orders: Order[]) => this.purchasedCount = orders.length);
    this.inventory.getProducts().subscribe(result => {
      const products: Product[] = result.payload;
      this.productCount = products.length;
      this.previewRows = products.slice(0, this.previewLimit);
    }, () => {
      this.productsUnavailable = true;
      this.previewRows = [];
    });
  }
}
