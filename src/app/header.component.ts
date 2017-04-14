import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import { AppService } from './app.service';
import { NotificationsService } from './viewnotification/notifications.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck {
  @Input() loggedin;
  headernotifications
  me = {};
  connection
  notificationnumber=0;
  msgs=[]
  msg

  constructor(private appService: AppService,private notification:NotificationsService, private router:Router) {

   }

  ngOnInit() {

// if(this.loggedin){
//   // this.shownotification()
//   console.log("this.loggedin",this.loggedin)
//   this.connection = this.notification.getNotificationssocketio().subscribe(message => {
//    console.log("from socket io")
//    this.notificationnumber++})
//  }

}

  ngDoCheck() {

  }
  ngOnChanges() {
    this.me = this.appService.me;
    this.notificationnumber = this.notification.notNum;
    if(this.loggedin) {
      this.shownotification()
      console.log("this.loggedin", this.loggedin)
      this.connection = this.notification.getNotificationssocketio()
        .subscribe(message => {
      //   console.log("from socket io")
      //   this.notificationnumber++
      //   console.log(this.notificationnumber)
      })
      this.notification.sendMessage("login", this.me['_id']);
    }
  }

  onnotificationseen() {
    this.shownotification()
    this.setseen()
    this.notificationnumber = 0;


  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('me');
    this.appService.checkStatus();
    this.router.navigate(['login']);
    window.location.reload();
  }
  setseen(){
    this.notification.setseen().subscribe(data => {
      console.log("put req",data)
       this.notificationnumber = 0; })

  }

  shownotification(){
     this.notification.getunseennotifications().subscribe(data => {
      const keyArr = [];
        for (const key in data) {
          console.log(data)
          keyArr.push(data[key]);
        }
        console.log("arraylenght",keyArr.length)
        this. headernotifications = keyArr;
      this.notificationnumber=keyArr.length

    });
  }
}

