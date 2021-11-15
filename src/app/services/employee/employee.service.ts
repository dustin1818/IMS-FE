import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //api from Backend can be seen in IMS/BE - app.js
  // url = 'http://localhost:3000/employees/';
  url = 'https://inventory-management-system-be.herokuapp.com/employees';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.url, employee);
  }

  ugradeEmployee(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editEmployee(id: string, employee: Employee): Observable<any> {
    return this.http.put(this.url + id, employee);
  }
}