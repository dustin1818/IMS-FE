import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
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

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver,
              private _userService: AuthenticationService,
              private router:Router,
              private toastr: ToastrService
    ) { }


  ngOnInit(): void {
    this._userService.getUserProfile().subscribe(
      data => {
        this.userProfile = data
      },
      error => {
        console.log(error)
      })
  }


  
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  logout(){
    localStorage.clear();
    this.toastr.info('Redirecting to Login Page ', 'User Logout successful!', {
      positionClass:'toast-bottom-right',
      tapToDismiss:true
    });
    this.router.navigate(['/signin'])

}

}