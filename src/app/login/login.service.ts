import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendLoginData(logins) {
    const body = JSON.stringify(logins);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://notlob-2eee7.firebaseio.com/login.json', body, {headers: headers});
  }
}
