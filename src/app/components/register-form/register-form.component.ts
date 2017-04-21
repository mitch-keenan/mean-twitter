import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  // Actual Form Data
  email: string;
  fullname: string;
  password: string;

  // Display strings - could be localized
  callToAction: string = "Register:";
  emailPlaceholder: string = "Email Address";
  namePlaceholder: string = "Name";
  passwordPlaceholder: string = "Password";
  buttonText: string = "Register!";

  // Form setup
  @ViewChild('registerForm') currentForm: NgForm;
  registerForm: NgForm;
  formErrors = {
    'email': '',
    'fullname': '',
    'password': ''
  };
  validationMessages = {
    'email': { 'required': 'You have to provide an email!' },
    'fullname': { 'required': 'You have to provide a name' },
    'password': { 'required': 'You have to provide a password!' }
  };

  constructor(private userService: UserService) { }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.registerForm) { return; }
    this.registerForm = this.currentForm;
    if (this.registerForm) {
      this.registerForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any, checkClean: Boolean = false) {
    if (!this.registerForm) { return; }
    
    const form = this.registerForm.form;

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
    user.name = this.fullname;
    user.password = this.password;

    this.userService.register(user);
  }
}