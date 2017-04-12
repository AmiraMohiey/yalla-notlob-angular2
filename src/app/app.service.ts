import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class AppService {
  private loggedin = false;
  private _me = {};
  jwtHelper: JwtHelper = new JwtHelper();

  get me(): {} {
    return this._me;
  }

  set me(value: {}) {
    this._me = value;
  }

  loggedinChange: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  checkStatus(): boolean {
    const token = localStorage.getItem('token');
    if (token != null) {
      this.loggedin = true;
      this.me = JSON.parse(localStorage.getItem('me'));
    }else {
      this.loggedin = false;
    }
    return this.loggedin;
  }

  setLoggedin(value: boolean) {
    this.loggedin = value;
    this.loggedinChange.next(this.loggedin);
  }
}
