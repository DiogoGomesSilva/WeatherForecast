import { WeatherModel, WeatherForecastModel } from './../models/weather';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getWeather(cityName: string): Observable<WeatherModel> {
    return this.httpClient.get<WeatherModel>(`${environment.apiBaseUrl}/forecast.json?key=${environment.key}&q=${cityName}&days=1`)
      .pipe(
        map(res => {
          let date = new Date(res.location.localtime);
          return new WeatherModel(res.location, res.current, res.forecast, this.getDate(date));;
        }),
        retry(2),
        catchError(this.handleError)
      )
  }

  getWeatherHistory(cityName: string, date: string): Observable<WeatherForecastModel> {
    return this.httpClient.get<WeatherForecastModel>(`${environment.apiBaseUrl}/history.json?key=${environment.key}&q=${cityName}&dt=${date}`)
      .pipe(
        map(res => {
          return new WeatherForecastModel(res.location, res.forecast);
        }),
        catchError(this.handleError)
      );
  }

  getDate(date: Date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
