import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Order } from '../../models/orders';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  orders: Order[];

  // url = 'http://localhost:3000/products';
  url = 'https://inventory-management-system-be.herokuapp.com/products';
  url2 = 'https://klylylydeee-cors.herokuapp.com/https://daps-node-server.herokuapp.com';

  constructor(private http: HttpClient) { }

  getProducts():Observable<any> {
    return this.http.get<Product[]>(this.url).pipe((data: any) => {
        return data
      })
  }
  getOrders(){
    return this.http.get(this.url2 + '/order');
  }

  addProducts(product:Product):Observable<Product> {
    return this.http.post<Product>(this.url, product)
  }

  getSingleProduct(id: number): Observable<any> {
    return this.http.get<Product>(`${this.url}/${id}`).pipe((data: any) => {
      return data
    })
  }

  updateProduct(id: number, data: any): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/${id}`, data)
  }


  deleteProduct(id:number):Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`)
  }

  

}
