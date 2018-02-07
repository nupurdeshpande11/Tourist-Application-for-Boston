import { Component, OnInit } from '@angular/core';

import { TriService } from '../services/trip.service'
import { Trip } from '../services/trip'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
     public triService:TriService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
    this.getTrip();
  }

  model = new Trip();
  id = this.route.snapshot.params['id'];
  
  getTrip(){
    this.triService.getTrip(this.id)
        .subscribe(trip=>{
          this.model = trip;
        })
  }

  updateTrip(){
    this.triService.updateTrip(this.id,this.model)
        .subscribe(()=> this.goBack())
  }

   goBack(){
    this.router.navigate(['/home'])
  }
}
