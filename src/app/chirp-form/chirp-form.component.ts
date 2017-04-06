import { Component, OnInit } from '@angular/core';

import { ChirpService } from '../chirp.service';
import { Chirp } from '../chirp';

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent implements OnInit {

  callToAction: String = "What's chirping on?";
  placeholder: String = "Chirp Chirp..";
  chirp: Chirp;

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
    this.reset();
  }

  pushChirp() {
    this.chirp.date = new Date();
    this.chirpService.postChirp(this.chirp);
    this.reset();
  }

  reset() {
     this.chirp = new Chirp();

     // TODO use user service
     this.chirp.userName = "Mitch";
  }

}
