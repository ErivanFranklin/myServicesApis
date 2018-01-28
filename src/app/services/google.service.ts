import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { HttpClient } from '@angular/common/http';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';


@Injectable()
export class GoogleService {

  constructor(private httpClient: HttpClient) { }

  // searchAdress(address: string): Observable<any> {
  //    return this.httpClient
  //   .get('/test.json')
  //   .map((response: Response) => <any> response);
  // }

}
