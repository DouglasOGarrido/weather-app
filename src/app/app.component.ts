import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  searchForm! : FormGroup;

  constructor (private fb:FormBuilder, private weatherService:WeatherService ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      cityName: [null, Validators.required]
    })
  }

  searchWeather() {
    if (this.searchForm.valid) {
      const formValues = this.searchForm.value;
      this.weatherService.getWeatherData(formValues.cityName).subscribe({
        next: (result) => {
          console.log('Sucesso na API', result);
        },
        error: (error) => {
          console.error('Erro na API', error);
        }
      });
    }
  }

  title = 'weather-app';

  days = [
    './forecast-day.component.html',
    './forecast-day.component.html',
    './forecast-day.component.html',
    './forecast-day.component.html',

  ]

  hours = [ 
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html'

  ]

  details = [
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
  ]
}
