import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
@Injectable()
export class NotificationsService {
  private url = 'http://localhost:8090/'
  private socket;
  notNum = 0;
  headers;
  constructor(private http: Http) {

  }


sendMessage(title, message){
   this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token', localStorage.getItem('token'));
  this.socket.emit(title, message); }

  getNotificationssocketio() {
    console.log("test")
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        this.notNum++
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


  getnotifications() {
     this.headers = new Headers();
     this.headers.append('Content-Type', 'application/json');
     this.headers.append('x_access_token', localStorage.getItem('token'));
    return this.http.get('http://127.0.0.1:8090/notifications', { headers: this.headers })
      .map((response: Response) => response.json());
  }

getunseennotifications(){
   this.headers = new Headers();
     this.headers.append('Content-Type', 'application/json');
     this.headers.append('x_access_token', localStorage.getItem('token'));
    return this.http.get('http://127.0.0.1:8090/notifications/unseen', { headers: this.headers })
      .map((response: Response) => response.json());
}
setseen(){
     this.headers = new Headers();
     this.headers.append('Content-Type', 'application/json');
     this.headers.append('x_access_token', localStorage.getItem('token'));
     return this.http.get('http://127.0.0.1:8090/notifications/setseen', { headers: this.headers })
      .map((response: Response) => response.json());
}
}

