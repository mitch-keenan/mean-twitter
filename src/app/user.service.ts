import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { JwtHelper } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import  { User } from './user';

const TOKEN_KEY = 'mean-twitter-token';
const API = 'http://localhost:3000/api/v1/users';

@Injectable()
export class UserService {

  jwt: JwtHelper = new JwtHelper();

  constructor(private http: Http) { }

  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  getHeaders() {
    if(!this.isLoggedIn()){ return; };

    let h = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ this.getToken()
    });  
    let options = new RequestOptions({headers: h});

    return options;
  }

  logOut() {
    localStorage.removeItem(TOKEN_KEY);
  }

  isLoggedIn() {
    const token: string = this.getToken();
    if(!token) { return false; }
    return !this.jwt.isTokenExpired(token);
  }

  getCurrentUser() {
    if(!this.isLoggedIn()) { return; }

    const token = this.getToken();
    const payload = this.jwt.decodeToken(token);
    return {
      email : payload.email,
      name : payload.name
    };
  }

  register(user: User) {
    let result = this.http.post(`${API}/register`, user)
      .map(res => res.json())
      .share(); // Share prevents further subscription from triggering requests

    result.subscribe(data => {
      this.saveToken(data.token);
    });

    return result;
  }

  login(user: User) {
    let result = this.http.post(`${API}/login`, user)
      .map(res => res.json())
      .share(); // Share prevents further subscription from triggering requests
    
    result.subscribe(data => {
      this.saveToken(data.token);
    });

    return result;
  }
}
