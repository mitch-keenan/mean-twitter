import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import  { Chirp } from './chirp';

const CHIRPS : Chirp[] = [
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

@Injectable()
export class ChirpService {

  constructor(private http: Http) { }

  getAllChirps(): Observable<Chirp[]> {
    return Observable.of(CHIRPS);
  }

}
