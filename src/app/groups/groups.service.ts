import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class GroupsService {
  headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x_access_token', localStorage.getItem('token'));
  }

  listGroups() {
    return this.http.get('http://127.0.0.1:8090/groups', {headers: this.headers})
      .map((response: Response) => response.json());
  }

}
