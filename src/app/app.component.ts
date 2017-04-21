import { Component,  } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chirp!';

  constructor(private userService: UserService) { }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  getCurrentUser() {
    return this.userService.getCurrentUser();
  }
}
