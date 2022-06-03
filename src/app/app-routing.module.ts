import { DashbordUserComponent } from './components/dashbord-user/dashbord-user.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResultSearchAnnouncementComponent } from './components/result-search-announcement/result-search-announcement.component';
import { AnnounceDetailsComponent } from './components/announce-details/announce-details.component';
import {AllAnnoucementComponent} from "./components/all-annoucement/all-annoucement.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./components/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main-profile',
    component: DashbordUserComponent,
  },
  { path: 'annoucement-details/:id', component: AnnounceDetailsComponent },
  {
    path: 'result-announcement',
    component: ResultSearchAnnouncementComponent,
  },
  {
    path: 'announcements',
    component: AllAnnoucementComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'home' },
  //{ path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
