import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { UserService } from './user.service';
import { Chirp } from './chirp';

/* Mock Data
var CHIRPS : Chirp[] = [
  {
    id: 0,
    userId: 0,
    userName: 'Mitch',
    date: new Date(),
    body: 'This is my first Chirp!'
  },
  {
    id: 1,
    userId: 1,
    userName: 'Ashley',
    date: new Date(),
    body: 'This is my first Chirp too!'
  },
  {
    id: 2,
    userId: 0,
    userName: 'Mitch',
    date: new Date(),
    body: 'Chirping is fun!!'
  }
];
*/

const API = 'http://localhost:3000/api/v1/chirps';

@Injectable()
export class ChirpService {

  chirps: Chirp[] = [];

  constructor(private http: Http, private userService: UserService) { }

  getAllChirps(): Observable<Chirp[]> {
    this.chirps = [];
    this.http.get(API)
      .map(res => res.json())
      .subscribe(data => {
        data.forEach((chirp: Chirp) => {
          this.chirps.unshift(chirp);
        });
      });
    
    return Observable.of(this.chirps);
  }

  postChirp(chirp: Chirp) {
    let headers = this.userService.getHeaders();
    console.log(headers);
    this.http.post(API, chirp, headers)
      .map(res => res.json())
      .subscribe(data => {
        this.chirps.unshift(chirp);
      });
  }

  /* Mock Service
  getAllChirps(): Observable<Chirp[]> {
    return Observable.of(CHIRPS);
  }

  postChirp(chirp: Chirp) {
    CHIRPS.unshift(chirp);
  }
  */

}
