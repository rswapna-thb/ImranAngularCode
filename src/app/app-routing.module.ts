import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { DscreenComponent } from './dscreen/dscreen.component';






const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'fpassword',component:FpasswordComponent
  },
  {
    path:'registration', component:RegistrationComponent
  },
  {
    path:'dscreen', component:DscreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [LoginComponent,FpasswordComponent,RegistrationComponent,DscreenComponent]
