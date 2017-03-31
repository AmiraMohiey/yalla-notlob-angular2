import { Injectable } from '@angular/core';
import {Subject} from "rxjs";


@Injectable()
export class AppService {
  private loggedin = true;
  loggedinChange: Subject<boolean> = new Subject<boolean>()
  constructor() { }
  checkStatus() {
      return this.loggedin;
  }
  setLoggedin(value: boolean) {
    this.loggedin = value;
    this.loggedinChange.next(this.loggedin);
  }
}
