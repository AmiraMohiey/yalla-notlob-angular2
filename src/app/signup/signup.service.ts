import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  sendRegData(user) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://notlob-2eee7.firebaseio.com/user.json', body, {headers: headers});
  }

}
