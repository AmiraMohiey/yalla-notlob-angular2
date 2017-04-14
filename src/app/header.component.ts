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
  headernotifications
  me = {};
  connection
  notificationnumber=0;
  msgs=[]
  msg
  
  constructor(private appService: AppService,private notification:NotificationsService) {
  
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
  ngOnChanges() {
    this.me = this.appService.me;
    if(this.loggedin){
      this.shownotification()
  console.log("this.loggedin",this.loggedin)
  this.connection = this.notification.getNotificationssocketio().subscribe(message => {
   console.log("from socket io")
   this.notificationnumber++})}
     
  }
 
  onnotificationseen() {
    this.shownotification()
    this.setseen()
    this.notificationnumber = 0;
   
  
  }
  logout() {
    localStorage.removeItem('token');
    this.appService.checkStatus();
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

