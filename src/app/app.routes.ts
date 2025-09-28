import { Routes } from '@angular/router';
import {SignInComponent} from "./iam/presentation/components/sign-in/sign-in";
import {SignUpComponent} from "./iam/presentation/components/sign-up/sign-up";
import {HomeComponent} from "./main-menu/pages/home/home.component";

export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
