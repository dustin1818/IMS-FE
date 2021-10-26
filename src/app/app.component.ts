import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { AuthenticationService } from './services/user-authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMS-FE'

  constructor( public auth:AuthenticationService){}

  
}
