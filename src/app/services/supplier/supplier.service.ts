import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier }  from  '../../models/supplier'

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  //api from Backend can be seen in IMS/BE - app.js
  // url = 'http://localhost:3000/api/suppliers/';
  url = 'https://inventory-management-system-be.herokuapp.com/api/suppliers';

  constructor(private http: HttpClient) { }

  getSupplier(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteSupplier(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  addSupplier(supplier: Supplier): Observable<any> {
    return this.http.post(this.url, supplier);
  }

  ugradeSupplier(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  editSupplier(id: string, supplier: Supplier): Observable<any> {
    return this.http.put(`${this.url}/${id}`, supplier);
  }
}