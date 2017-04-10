import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import * as io from 'socket.io-client';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
@Injectable()
export class NotificationsService {
  private url = 'http://localhost:5000';
  private socket;
  headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token', localStorage.getItem('token'));
  }


  // getNotificationssocketio() {
  //   let observable = new Observable(observer => {
  //     this.socket = io(this.url);
  //     this.socket.on('message', (data) => {
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     };
  //   })
  //   return observable;
  // }


  getnotifications() {
    return this.http.get('http://127.0.0.1:8090/notifications', { headers: this.headers })
      .map((response: Response) => response.json());
  }

}
