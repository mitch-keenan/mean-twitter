import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ChirpListComponent } from './chirp-list/chirp-list.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: '',         component: ChirpListComponent,    canActivate: [ AuthGuard ] },
  { path: 'login',    component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);