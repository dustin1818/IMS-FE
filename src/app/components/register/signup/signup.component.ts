import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registerForm: FormGroup; 
  submitting: boolean = false;
  message:any;
  messageClass:any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router : Router,
    private toastr: ToastrService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateEmail
      ])],
      username: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validatePass
      ])],
      phoneNo: ['', Validators.required], // number
      location: ['', Validators.required],
      position: ['', Validators.required],
    })
  }

  validateEmail(controls:any) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) return null;
    return { 'validateEmail': true };
  }

  validatePass(controls:any) {
    const regExp = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    if (regExp.test(controls.value)) return null;
    return { 'validatePass': true };
  }

  onRegisterSubmit() {
    this.submitting = true;
    const user = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      phoneNo: this.registerForm.get('phoneNo')?.value,
      location: this.registerForm.get('location')?.value,
      email: this.registerForm.get('email')?.value,
      position: this.registerForm.get('position')?.value
    }
    this.authService.registerUser(user).subscribe((data: Object) => {
      if (!data['success']) {
       this.messageClass = 'alert alert-danger'; 
       this.message = `Field or  ${data['message']}`;
       
       this.submitting = false; // Re-enable submit button
     } else {
      this.message = data['message']; 
       this.messageClass = 'alert alert-success'; 
       this.toastr.info('Proceeding to Login Page ', 'User successfully registered!', {
        positionClass:'toast-bottom-right',
        tapToDismiss:true
      });
       setTimeout(() => {
         this.router.navigate(['/signin']); // Redirect to login view
       }, 2000);
     }
   })
 }

  }


