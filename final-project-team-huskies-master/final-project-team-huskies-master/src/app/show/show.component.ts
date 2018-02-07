import { Component, OnInit } from '@angular/core';

import { TriService } from '../services/trip.service'
import { Trip } from '../services/trip'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
     public triService:TriService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getTrip();
  }

  trip:Trip;
  getTrip(){
    var id = this.route.snapshot.params['id'];
    this.triService.getTrip(id)
        .subscribe(trip=>{
          this.trip = trip;
        })
  }
  goBack(){
    this.router.navigate(['/home'])
  }
}
