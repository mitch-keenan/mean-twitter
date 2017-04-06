import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChripListComponent } from './chrip-list/chrip-list.component';
import { ChirpService } from './chirp.service';

@NgModule({
  declarations: [
    AppComponent,
    ChripListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChirpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
