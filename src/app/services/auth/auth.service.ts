import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain: string;
  authToken: any;
  user:any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.domain = "http://localhost:3000"
  }

  registerUser(user: object) {
    return this.http.post(this.domain + '/auth/register', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  loginUser(user: object) {
    return this.http.post(this.domain + '/auth/login', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


  logout() {
    this.authToken = null
    this.user = null
    localStorage.clear()
  }

  storeUserData(token: string, user: any) {
    this.authToken = localStorage.setItem('token', token)
    this.user = localStorage.setItem('user', JSON.stringify(user)) // stringfy
  }

  // signIn( data:any) :Observable<any>{
  //   return this.http.post('http://localhost:3000/auth/login',data)
  // }



  getUserData() {
    return {
      user: JSON.parse(localStorage.getItem('user') || '{}') // do this
    }
  }

  redirectToHome() {
    let user = JSON.parse(localStorage.getItem('user') || '{}')
      setTimeout(() => {
        this.router.navigate(['/user/mainbar'])
      }, 1500)
    }
  

  loggedIn() {
    return !!localStorage.getItem('token') // give true value if token exists otherwise false
  }

}
