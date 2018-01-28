import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { ErrorHandler } from '@angular/core/src/error_handler';

@Injectable()
export class WeatherService {
  api = 'http://api.openweathermap.org/data/2.5';
  appId = environment.weather_appid;
  query = '';
  constructor(private httpClient: HttpClient) { }

  getByCordinates(lat: number, long: number): Observable<any> {
    this.query = `/weather?lat=${lat}&lon=${long}&appid=${this.appId}`;
    console.log(this.query);
    return this.httpClient
    .get(`${this.api}${this.query}`)
    .map((response: Response) => <any> response);
  }

  getByCityName(city: string): Observable<any> {
    this.query = `/weather?q=${city}&appid=${this.appId}`;
    return this.httpClient
    .get(`${this.api}${this.query}`)
    .map((response: Response) => <any> response);
  }

  getByRectangleZone(city: string): Observable<any> {
    this.query = `q=${city}&appid=${this.appId}`;
    console.log(`${this.api}${this.query}`);
    return this.httpClient
    .get(`${this.api}${this.query}`)
    .map((response: Response) => <any> response);
  }

}
