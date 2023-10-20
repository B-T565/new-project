import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { OtpComponent } from './components/otp/otp.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'content',component: ContentComponent},
  {path: 'login',component: LoginComponent},
  {path: 'forgot-password',component: ForgotPasswordComponent},
  {path: 'otp',component: OtpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
