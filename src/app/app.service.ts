import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable()
export class AppService {
  private loggedin = false;
  private _me = {};

  get me(): {} {
    return this._me;
  }

  set me(value: {}) {
    this._me = value;
  }

  loggedinChange: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  checkStatus(): boolean {
  return this.loggedin;
  }

  setLoggedin(value: boolean) {
    this.loggedin = value;
    this.loggedinChange.next(this.loggedin);
  }
}
