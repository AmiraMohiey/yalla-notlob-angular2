import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

@Injectable()
export class FriendsService {
  headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token', localStorage.getItem('token'));
  }
  getFriends() {
    return this.http.get('http://127.0.0.1:8090/user/listfriends', {headers: this.headers})
      .map((response: Response) => response.json());
  }

  addFriend(user: any) {
    const body = JSON.stringify(user);
    return this.http.post('http://127.0.0.1:8090/user/addfriend', body, {headers: this.headers})
      .map((response: Response) => response.json());
  }

  unfriend(id: any) {
    const body = JSON.stringify(id);
    return this.http.post('http://127.0.0.1:8090/user/unfriend', body, {headers: this.headers})
      .map((response: Response) => response.json());
  }

}
