import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { PlannerComponent } from './planner/planner.component';
import { HomeComponent } from './home/home.component';
//import { HotelsComponent } from './hotels/hotels.component';
//import { PlacesComponent } from './places/places.component';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { TripPipe } from './directives/trip.pipe';

import { AngularFireModule} from 'angularfire2';
import { TriService } from './services/trip.service';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './services/auth.service';
import { HomemainComponent } from './homemain/homemain.component';
import { WeatherComponent } from './weather/weather.component';
import { MbtaComponent } from './mbta/mbta.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCui6Z8p0Fme0di8fAOacQFxei3CIVE-AQ",
authDomain: "webproject-187001.firebaseapp.com",
databaseURL: "https://webproject-187001.firebaseio.com",
projectId: "webproject-187001",
storageBucket: "webproject-187001.appspot.com",
messagingSenderId: "908744198785"
};



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   // PlannerComponent,
    HomeComponent,
   // HotelsComponent,
   // PlacesComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    TripPipe,
    EmailComponent,
    LoginComponent,
    MembersComponent,
    SignupComponent,
    HomemainComponent,
    WeatherComponent,
    MbtaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2OrderModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ],
  providers: [AuthGuard,TriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
