import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/user-authentication/authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  userProfile = {};

  constructor(
    private _userService: AuthenticationService,
    private router: Router
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
  logout(){
    localStorage.clear();
    this.router.navigate(['/signin'])
}

}




