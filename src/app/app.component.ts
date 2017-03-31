import {Component, OnChanges, OnInit} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  loggedin = false;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.loggedin = this.appService.checkStatus();
    this.appService.loggedinChange.subscribe((value) => {
      this.loggedin = value;
    });
  }
  ngOnChanges() {
    // this.loggedin = this.appService.checkStatus();
    // console.log('from app', this.loggedin);
  }
}
