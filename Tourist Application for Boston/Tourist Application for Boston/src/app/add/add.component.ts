import { Component, OnInit } from '@angular/core';

import { TriService } from '../services/trip.service'
import { Trip } from '../services/trip'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
     public triService:TriService,
     public route:ActivatedRoute,
     public router:Router
  ) { }

  ngOnInit() {
  }
  model = new Trip();
  addTrip(){
    this.triService.addTrip(this.model)
        .subscribe(()=> this.goBack())
  }
   goBack(){
    this.router.navigate(['/home'])
  }
}
