import { Component, OnChanges, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  loggedin = false;
  constructor(private appService: AppService, private router: Router) { }
  ngOnInit() {
    this.loggedin = this.appService.checkStatus();
    this.appService.loggedinChange.subscribe((value) => {
      this.loggedin = value;
    });
    if (this.loggedin) { this.router.navigate(["home"]) }
    else { this.router.navigate(["login"]) }
  }
  ngOnChanges() {
    // this.loggedin = this.appService.checkStatus();
    // console.log('from app', this.loggedin);
  }
}
