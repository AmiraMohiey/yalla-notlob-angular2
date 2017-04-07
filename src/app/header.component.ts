import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() loggedin;
  me = {};
  notificationnumber=1;
  constructor(private appService: AppService) { }
  changeStatus() {
    this.appService.setLoggedin(!this.appService.checkStatus());
  }
  ngOnInit() { }
  ngOnChanges() {
    this.me = this.appService.me;
  }
  getnotification() {
    this.notificationnumber = 2;// comming from server
  }
  onnotificationseen() {

    this.notificationnumber = 0;
  }
}

