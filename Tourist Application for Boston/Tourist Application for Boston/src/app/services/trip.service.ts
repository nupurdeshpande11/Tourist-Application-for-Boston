import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
export class TriService {

  constructor( private http:Http) { }
  getTrips(){
    return this.http.get("http://localhost:3000/api/trips")
        .map(res => res.json());
  }
   addTrip(info){
    return this.http.post("http://localhost:3000/api/trips",info)
        .map(res => res.json());
  }
  getTrip(id){
    return this.http.get("http://localhost:3000/api/trips/"+id)
        .map(res => res.json());
  }
  deleteTrip(id){
    return this.http.delete("http://localhost:3000/api/trips/"+id)
        .map(res => res.json());
  }
  updateTrip(id, info){
    return this.http.put("http://localhost:3000/api/trips/"+id,info)
        .map(res => res.json());
  }
}
