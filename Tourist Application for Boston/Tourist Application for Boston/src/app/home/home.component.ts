import { Component, OnInit } from '@angular/core';

import { TriService } from '../services/trip.service'
import { Trip } from '../models/trip'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  
})
export class HomeComponent implements OnInit {
  

  constructor(public triService:TriService) {
   }

   ngOnInit() {
    this.getTrips();
  }

   triptable: Trip;
   key: string = 'name'; //set default
   reverse: boolean = false;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;
   }
  

  
  trips:Trip;
  getTrips(){
    this.triService.getTrips()
        .subscribe(trips=>{
          this.trips = trips;
        })
  }
  deleteTrip(id){
    this.triService.deleteTrip(id)
      .subscribe(()=>{
        this.getTrips();
      });
  }

  
}
