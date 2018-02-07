import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component'; 
//import { HotelsComponent } from './hotels/hotels.component';
//import {PlannerComponent } from './planner/planner.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import {EmailComponent } from './email/email.component';
import {HomemainComponent} from './homemain/homemain.component';
import {AuthGuard} from './services/auth.service';
import {WeatherComponent} from './weather/weather.component';
import { MbtaComponent} from './mbta/mbta.component';



const routes:Routes = [
 //{path:'', redirectTo:'/planner', pathMatch:'full' },
 { path: '', redirectTo: '/login', pathMatch: 'full' },
   {path:'home', component:HomeComponent},
  {path:'add', component:AddComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'show/:id', component:ShowComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'homemain',component: HomemainComponent},
  { path: 'weather', component: WeatherComponent},
  {path:'mbta', component: MbtaComponent},
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }


];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
