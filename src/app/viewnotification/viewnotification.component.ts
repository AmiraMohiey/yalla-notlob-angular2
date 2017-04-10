import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';




@Component({
  selector: 'app-viewnotification',
  templateUrl: './viewnotification.component.html',
  styleUrls: ['./viewnotification.component.css']
})
export class ViewnotificationComponent implements OnInit {

  constructor(private notificationservice:NotificationsService) { }

  ngOnInit() {
   this.getnotifications()
  }



 getnotifications(){

      this.notificationservice.getnotifications().subscribe(data => {
     console.log(data)
    });
}





}