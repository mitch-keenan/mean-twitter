import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Autosize } from 'angular2-autosize/src/autosize.directive';

import { AppComponent } from './app.component';
import { ChirpListComponent } from './chirp-list/chirp-list.component';
import { ChirpService } from './chirp.service';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { CountdownPipe } from './countdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChirpListComponent,
    ChirpFormComponent,
    CountdownPipe,
    Autosize
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
