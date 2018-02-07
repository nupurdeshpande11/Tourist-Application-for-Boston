import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map' ;

@Component({
  selector: 'app-mbta',
  templateUrl: './mbta.component.html',
  styleUrls: ['./mbta.component.css']
})
export class MbtaComponent implements OnInit {

  constructor(private http: Http) { }
 
  data : any;

  ngOnInit() {
    return this.http.get('http://realtime.mbta.com/developer/api/v2/routes?api_key=hP0emODJ6k2bfp6fjICVRg&format=json')//, {search: searchParams})
    .map(res => res.json().mode)
    .subscribe(res => this.data = res);
  }

}
