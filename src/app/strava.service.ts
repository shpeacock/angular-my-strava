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
      `https://www.strava.com/api/v3/athletes/6147470/stats?access_token=4865af38b6308fdd5b776036cec55dd8d68d2591`
      ).pipe(map(response => response)).toPromise(); 
  }
  
}
