import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { OrdersService } from '../orders/orders.service';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';



@Component({
  selector: 'app-viewnotification',
  templateUrl: './viewnotification.component.html',
  styleUrls: ['./viewnotification.component.css']
})
export class ViewnotificationComponent implements OnInit {
 notifications=[]
 joined
  constructor(private notificationservice:NotificationsService ,private order:OrdersService,private router:Router) 
  { this.joined=true}

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



if (value == " invitated you to ")
{

       return true
 }
else{return false}

}


join(notification){
 this.order.joinorder(notification.msg[2]._id).subscribe(
      data => {

          this.order.getorderbyid(notification.msg[2]._id).subscribe(
                        data2 => {  console.log("updaa",data2)
                              let navigationExtras: NavigationExtras = {
                              queryParams: {
                               
                                "order": JSON.stringify(data2)
                        
                              }
                            }
                   this.joined=false 
                    this.router.navigate(["vieworder"], navigationExtras);

      })
  
 })


}


}