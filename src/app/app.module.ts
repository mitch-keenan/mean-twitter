import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';
import { Autosize } from 'angular2-autosize/src/autosize.directive';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { ChirpListComponent } from './components/chirp-list/chirp-list.component';
import { ChirpService } from './services/chirp.service';
import { ChirpFormComponent } from './components/chirp-form/chirp-form.component';
import { CountdownPipe } from './shared/countdown.pipe';
import { TimeAgoPipe } from './shared/timeago.pipe';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthGuard } from './shared/auth.guard';
import { routing } from './routing';

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
    HttpModule,
    routing
  ],
  providers: [UserService, ChirpService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
