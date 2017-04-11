import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';




@Component({
  selector: 'app-viewnotification',
  templateUrl: './viewnotification.component.html',
  styleUrls: ['./viewnotification.component.css']
})
export class ViewnotificationComponent implements OnInit {
 notifications=[]
  constructor(private notificationservice:NotificationsService) { }

  ngOnInit() {
   this.getnotifications()
  }



 getnotifications(){

      this.notificationservice.getnotifications().subscribe(data => {
      //  console.log(data[0].msg)
      // console.log(data[1].msg)
      //  console.log(data[2].msg)
        const keyArr = [];
        for (const key in data) {
          console.log(data)
          keyArr.push(data[key]);
        }
        this.notifications = keyArr;
      
    });
    console.log(this.notifications)
}


invited(value){

if (value == " invitated you to order ")
{return true}
else{return false}

}

join(notification){
  console.log(notification.msg[2]._id)
}
}