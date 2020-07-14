import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('WeatherForecastComponent', () => { 

    let component: WeatherForecastComponent;
    let service: WeatherForecastService;
    let httpClient : HttpClient;
    let activatedRoute : ActivatedRoute

    beforeEach(() => {
      service = new WeatherForecastService(httpClient);
      component = new WeatherForecastComponent(service, activatedRoute);
      TestBed.createComponent(WeatherForecastComponent);
    });
  
    afterEach(() => {      
      service = null;
      component = null;
    }); 

});

