import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { AppService } from './app.service';
import { NotificationsService } from './viewnotification/notifications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() loggedin;
  me = {};
  connection
  notificationnumber=1;
  msgs=[]
  msg
  
  constructor(private appService: AppService,private notification:NotificationsService) {
    this.notification.getNotificationssocketio();
   }

  ngOnInit() { 

this.connection = this.notification.getNotificationssocketio().subscribe(message => {
  console.log("from socket io")
   this.msgs.push(message);



}) }
  ngOnChanges() {
    this.me = this.appService.me;
     //this.notification.getNotificationssocketio();
     
  }
  getnotification() {
    this.notificationnumber = 2;// comming from server
  }
  onnotificationseen() {

    this.notificationnumber = 0;
  }
  logout() {
    localStorage.removeItem('token');
    this.appService.checkStatus();
    window.location.reload();
  }
}

