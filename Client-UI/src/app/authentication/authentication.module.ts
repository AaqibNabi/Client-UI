import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';


@NgModule({
  declarations: [
    EmployeeLoginComponent,
    EmployerRegistrationComponent,
    EmployeeRegistrationComponent,
    EmployerLoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
