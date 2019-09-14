import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// var strava = require('strava-v3');
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(private fuckenThing: HttpClient) { }

  getDatData(){
    return this.fuckenThing.get(
      `https://www.strava.com/api/v3/athletes/6147470/stats?access_token=830f3a982142f8f52167b62cc9454863ef95ea1a`
      ).pipe(map(response => response)).toPromise(); 
  }
  
}
