import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';
import { Autosize } from 'angular2-autosize/src/autosize.directive';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { ChirpListComponent } from './chirp-list/chirp-list.component';
import { ChirpService } from './chirp.service';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { CountdownPipe } from './countdown.pipe';
import { TimeAgoPipe } from './timeago.pipe';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChirpListComponent,
    ChirpFormComponent,
    CountdownPipe,
    TimeAgoPipe,
    Autosize,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ChirpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
