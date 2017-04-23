import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let requireLogin = next.data && next.data["loggedIn"];
    let loggedIn = this.userService.isLoggedIn();

    if(requireLogin && !loggedIn){
      this.router.navigate(['/login']);
      return false;
    } else if (!requireLogin && loggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
