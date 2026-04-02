import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  domain = 'https://ims-be-ktp4.onrender.com';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  getUserProfile() {
    return this.http.get(this.domain + '/user/profile', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    });
  }

  getAll() {
    return this.http.get<User[]>(this.domain + '/user/');
  }
}
