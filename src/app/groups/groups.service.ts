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

  addGroup(name) {
    return this.http.post('http://127.0.0.1:8090/groups', {name: name}, {headers: this.headers})
      .map((response: Response) => response.json());
  }

  deleteGroup(id) {
    return this.http.delete('http://127.0.0.1:8090/groups/' + id, {headers: this.headers})
      .map((response: Response) => response.json());
  }

  addGroupMember(body) {
    return this.http.post('http://127.0.0.1:8090/groups/addMember', body, {headers: this.headers})
      .map((response: Response) => response.json());
  }
  deleteGroupMember(body) {
    return this.http.post('http://127.0.0.1:8090/groups/deleteMember', body, {headers: this.headers})
      .map((response: Response) => response.json());
  }

}
