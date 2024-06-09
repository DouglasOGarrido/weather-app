import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  private apiKey = '89c5b1b153068d744b97485c9a020ad9';
  private apiURL = `api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid=${this.apiKey}'`;

  private baseURL = 'api.openweathermap.org/data/2.5/forecast/daily';


  constructor(private http:HttpClient) {}

  // cnt param: A number of days, which will be returned 
  // in the API response (from 1 to 16)
  getWeatherData(cityName: string, cnt: number = 16): Observable<any>{
    return this.http.get(this.baseURL, {
      params: {
        'q': cityName,
        'cnt': cnt,
        'appid': this.apiKey,
      }
    });
  }

}
