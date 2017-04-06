import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  sendRegData(user) {
    console.log(user);
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://172.16.5.117:8090/authenticate/register', body, {headers: headers});
  }
}
