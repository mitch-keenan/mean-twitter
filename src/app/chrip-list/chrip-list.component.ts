import { Component, OnInit } from '@angular/core';

import { Chirp } from '../chirp';
import { ChirpService } from '../chirp.service';

@Component({
  selector: 'app-chrip-list',
  templateUrl: './chrip-list.component.html',
  styleUrls: ['./chrip-list.component.css']
})
export class ChripListComponent implements OnInit {

  chirps: Chirp[] = [];

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
    this.chirpService.getAllChirps().subscribe(chirps => {
      this.chirps = chirps;
    });
  }

}
