import { environment } from './../../../environments/environment';
import { WeatherModel, Location, WeatherForecastModel, HistoricItem } from './../../models/weather';
import { WeatherForecastService } from './../../services/weather-forecast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
 
  historic: Array<HistoricItem> = [];  
  waetherCurrent: WeatherModel = new WeatherModel(new Location(""))

  constructor(private weatherService: WeatherForecastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const cityName = this.route.snapshot.paramMap.get('id');
    this.getWaether(cityName);
    let today = new Date(); 
    const formattedDate = formatDate(today.toString(), 'yyyy-MM-dd', 'en-US');
    this.getHourlynformation(cityName, formattedDate); 
  }

  getWaether(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe((waether: WeatherModel) => {
      let icon = waether.current.condition.icon.substring(waether.current.condition.icon.lastIndexOf('/') + 1);  
      this.waetherCurrent = waether;
      this.waetherCurrent.current.condition.icon =  this.waetherCurrent.current.is_day ? `day/${icon}` : `night/${icon}`;  
         
    });
  }

  getHourlynformation(cityName: string, date: string){    
    this.weatherService.getWeatherHistory(cityName, date).subscribe((waetherForecast: WeatherForecastModel) => {       
      waetherForecast.forecast.forecastday[0].hour.forEach(element => {        
        let date = new Date(element.time);
        let current = ("0" + date.getHours()).slice(-2);        
        environment.periodsDay.forEach(e => {         
          if (current == e.hour){            
            let icon = element.condition.icon.substring(element.condition.icon.lastIndexOf('/') + 1);    
            icon = element.is_day ? `day/${icon}` : `night/${icon}`;
            let item = new HistoricItem(e.name, element.temp_c, icon);        
            this.historic.push(item);  
          }
        })        
      });   
    });
  }

}
