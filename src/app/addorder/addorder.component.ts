import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  invited=""
order={resturant:"",
forr:"",
invitedfriend:"",
invitedgroup:""}

userfriends=[{name:"amira@yahoo.com"},{name:"mohamed@yahoo.com"}]
usergroups=[{name:"group1"},{name:"group2"}]
constructor( private ordersservice: OrdersService) { }
ngOnInit() {  }
onclicked(){
   console.log(this.order)

  this.ordersservice.addorder(this.order).subscribe(
      data => { console.log(data)
       
      })
}
isgroup(){

  if(this.invited=="group")
{return true}
else {return false}}

}
