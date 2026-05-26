import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  routes = [
    { source: 'jaipur', destination: 'udaipur', distance: '400 km', duration: '7 hrs' },
    { source: 'delhi', destination: 'jaipur', distance: '280 km', duration: '5 hrs' },
    { source: 'mumbai', destination: 'pune', distance: '150 km', duration: '3 hrs' }
  ];

  search(source: string, destination: string) {
    return this.routes.filter(r =>
      r.source.toLowerCase() === source.toLowerCase() &&
      r.destination.toLowerCase() === destination.toLowerCase()
    );
  }
}
