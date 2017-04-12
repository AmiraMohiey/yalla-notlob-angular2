import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../viewnotification/notifications.service';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestorders
  friendsactivity
  constructor(private orders:OrdersService,private activities:NotificationsService) { 


  }

  ngOnInit() {
this.getlatestorders()
this.getnotifications()
  }

  
  getlatestorders(){

      this.orders.getlatestorders().subscribe(
      data => {
        const keyArr = [];
        for (const key in data) {
          console.log(data)
          
         
          keyArr.push(data[key]);
        }
        this.latestorders = keyArr;
      
      }
    );
   }
    getnotifications(){

      this.activities.getnotifications().subscribe(data => {
      const keyArr = [];
        for (const key in data) {
          console.log(data)
          keyArr.push(data[key]);
        }
        this.friendsactivity = keyArr;
      
    });

}

}
