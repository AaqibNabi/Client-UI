import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';

const routes: Routes = [
  {path:'employee-login',component:EmployeeLoginComponent},
  {path:'employee-registration',component:EmployeeRegistrationComponent},
  {path:'employer-login',component:EmployerLoginComponent},
  {path:'employer-registration',component:EmployerRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
