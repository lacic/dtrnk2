import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {RegisterPageComponent} from '../register-page/register-page.component';
import {PrivatePageComponent} from '../private-page/private-page.component';
import {NotFoundPageComponent} from '../not-found-page/not-found-page.component';
import {AuthGuard} from '../guards/auth.guard.guard';
const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path: 'login',component:LoginPageComponent},
  {path: 'register',component:RegisterPageComponent},
  {path: 'private',component:PrivatePageComponent, canActivate: [AuthGuard]},
  {path: '**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }