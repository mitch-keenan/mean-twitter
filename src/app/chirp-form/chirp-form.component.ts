import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';
import { ChirpService } from '../chirp.service';
import { Chirp } from '../chirp';

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent {

  // Actual Form Data
  body: String;

  // Display Strings - could be localized
  callToAction: String = "What's chirping on?";
  placeholder: String = "Chirp Chirp..";
  buttonText: String = "Chirp!";
  charactersLabel: String = " characters remaining";

  // Form setup
  @ViewChild('chirpForm') currentForm: NgForm;
  chirpForm: NgForm;
  formErrors = {
    'body': ''
  };
  validationMessages = {
    'body': {
      'required':      'You have to chirp something!',
      'minlength':     'You have to chirp something longer than 2 characters!',
      'maxlength':     'You have to chirp something 140 characters or fewer!',
    }
  };

  constructor(private chirpService: ChirpService, private userService: UserService) { }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.chirpForm) { return; }
    this.chirpForm = this.currentForm;
    if (this.chirpForm) {
      this.chirpForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any, checkClean: Boolean = false) {
    if (!this.chirpForm) { return; }
    
    const form = this.chirpForm.form;

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
      //If the form isn't valid, for an error check and exit
      this.onValueChanged(null, true);
      return;
    }

    // Push a chirp
    this.chirpService.postChirp({
      user: this.userService.getCurrentUser().email,
      body: this.chirpForm.form.get('body').value
    });

    this.chirpForm.form.reset();
  }
}