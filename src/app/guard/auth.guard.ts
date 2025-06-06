import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service'

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    redirectUrl:any;

    constructor(
        private authService: AuthService, 
        private router: Router
        ) { }

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
       if (this.authService.loggedIn()) {
           return true
       } else { 
           this.redirectUrl = state.url;
           this.router.navigate(['/signin'])
           return false
       }
    }
}