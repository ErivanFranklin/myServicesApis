import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { ErrorHandler } from '@angular/core/src/error_handler';

@Injectable()
export class InstagramService {
  apiRoot: string = 'https://api.instagram.com/v1';
  token: string = environment.instagtam_access_token;
  results: Object[];
  loading: boolean;

  constructor(private httpClient: HttpClient) {
      this.results = [];
      this.loading = false;
  }

  search(term: string): Observable<any> {
      return this.httpClient
      .get(`${this.apiRoot}${term}access_token=${this.token}`)
      .map((response: Response) => <any> response);
  }

}
