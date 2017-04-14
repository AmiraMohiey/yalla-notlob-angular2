import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendLoginData(logins) {
    const body = JSON.stringify(logins);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://127.0.0.1:8090/authenticate/login', body, {headers: headers})
      .map((response: Response) => response.json());
  }

facebooklogin(facebookuserobject){
    const body = JSON.stringify(facebookuserobject);
     const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://127.0.0.1:8090/authenticate/login', body, {headers: headers})
      .map((response: Response) => response.json());
}
}

