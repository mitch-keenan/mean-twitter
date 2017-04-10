import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  // Actual Form Data
  email: string;
  password: string;

  // Display strings - could be localized
  callToAction: string = "Login:";
  emailPlaceholder: string = "Email Address";
  passwordPlaceholder: string = "Password";
  buttonText: string = "Login";

  // Form setup
  @ViewChild('loginForm') currentForm: NgForm;
  loginForm: NgForm;
  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': { 'required': 'You have to chirp something!' },
    'password': { 'required': 'You have to chirp something!' }
  };

  constructor(private userService: UserService) { }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.loginForm) { return; }
    this.loginForm = this.currentForm;
    if (this.loginForm) {
      this.loginForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any, checkClean: Boolean = false) {
    if (!this.loginForm) { return; }
    
    const form = this.loginForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && (checkClean || control.dirty) && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if(!this.currentForm.valid) {
      //If the form isn't valid, perform an error check and exit
      this.onValueChanged(null, true);
      return;
    }

    // Try to login
    let user = new User();
    user.email = this.email;
    user.password = this.password;

    this.userService.login(user);
  }
}