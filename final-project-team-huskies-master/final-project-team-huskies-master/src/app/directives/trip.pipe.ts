import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trip' })
export class TripPipe implements PipeTransform {
  transform(trips: any, searchText: any): any {
    if(searchText == null) return trips;

    return trips.filter(function(trip){
      return trip.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
