import { Component, OnInit } from '@angular/core';
import { Chirp } from '../chrip.ts';

@Component({
  selector: 'app-chrip-main',
  templateUrl: './chrip-main.component.html',
  styleUrls: ['./chrip-main.component.css']
})
export class ChripMainComponent implements OnInit {

  constructor(private chirp: Chirp) { }

  ngOnInit() {
  }

}
