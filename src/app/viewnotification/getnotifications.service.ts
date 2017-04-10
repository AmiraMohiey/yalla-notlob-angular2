import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GetnotificationsService {

   headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token', localStorage.getItem('token'));
  }
  getnotifications() {
    return this.http.get('http://127.0.0.1:8090/notifications', { headers: this.headers })
      .map((response: Response) => response.json());
  }

}
