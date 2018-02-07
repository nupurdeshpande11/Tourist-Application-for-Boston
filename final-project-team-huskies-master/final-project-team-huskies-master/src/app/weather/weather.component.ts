import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map' ;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: Http) { }
  temp="";
  
  ngOnInit() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID=29a1e36e679a66a06660e42e13f5fc77')//, {search: searchParams})
    .map(res => res.json().main)
    .subscribe(res => this.temp = res);
  }

}
