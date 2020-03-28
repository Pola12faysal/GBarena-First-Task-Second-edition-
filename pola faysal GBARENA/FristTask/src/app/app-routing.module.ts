import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LogInComponent}from'./Forms/log-in/log-in.component';
import{RregisterComponent} from './Forms/rregister/rregister.component';
import{ProfileComponent}from'./profile/profile.component';
import{JopsComponent}from './jops/jops.component';
import { JopdetailsComponent } from './jops/jopdetails/jopdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGard}from 'src/app/servicies/auth-gard.guard';
import{Gard2Guard}from'src/app/servicies/gard2.guard';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'login', component:LogInComponent},
  {path: 'register', component:RregisterComponent,canActivate:[Gard2Guard]},
  {path: 'profile', component:ProfileComponent,canActivate:[AuthGard]},
  {path: 'explore', component:JopsComponent},
  {path: 'jopdetails', component:JopdetailsComponent,canActivate:[AuthGard]},
  { path: '',redirectTo: 'explore',pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
