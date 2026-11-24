import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/user-authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userProfile = {};
  readonly mobile$ = this.observer.observe('(max-width: 800px)').pipe(map(result => result.matches));
  readonly sections = [
    { path: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: 'inventory', icon: 'layers', label: 'Inventory' },
    { path: 'supplier-list', icon: 'local_shipping', label: 'Suppliers' },
    { path: 'employee', icon: 'people_outline', label: 'Employees' }
  ];
  readonly accountLinks = [
    { path: 'profile', icon: 'person_outline', label: 'Profile' },
    { path: 'help', icon: 'help_outline', label: 'Help' },
    { path: 'about', icon: 'info_outline', label: 'About' }
  ];

  constructor(private observer: BreakpointObserver, private users: AuthenticationService,
              private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.users.getUserProfile().subscribe(profile => this.userProfile = profile);
  }

  signOut(destination: '/welcome' | '/signin'): void {
    localStorage.clear();
    this.toastr.info('You have signed out of IMS.', 'Signed out', { positionClass: 'toast-bottom-right' });
    this.router.navigate([destination]);
  }
}
