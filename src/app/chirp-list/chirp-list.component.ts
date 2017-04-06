import { Component, OnInit } from '@angular/core';

import { Chirp } from '../chirp';
import { ChirpService } from '../chirp.service';

@Component({
  selector: 'app-chrip-list',
  templateUrl: './chirp-list.component.html',
  styleUrls: ['./chirp-list.component.css']
})
export class ChirpListComponent implements OnInit {

  chirps: Chirp[] = [];

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
    this.chirpService.getAllChirps().subscribe(chirps => {
      this.chirps = chirps;
    });
  }

}
