import { Component, OnInit,OnChanges } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { OrdersService } from '../orders/orders.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})

export class VieworderComponent implements OnInit ,OnChanges{
  me={}
order
joinedfriends
meals
invitedfriends
addmeal={orderid:"",comment:"",amount:"",price:"",item:"",person:""}
  constructor(private route: ActivatedRoute, private ordersservice: OrdersService,private appService: AppService) {
             this.route.queryParams.subscribe(params => {
             this.order = JSON.parse(params["order"]);
             this.invitedfriends=this.order.invitedfriends;
             this.joinedfriends=this.order.joined;
             this.meals=this.order.meals;
             this.addmeal.orderid=this.order.id;
          });
          // console.log(this.order.owner)
         this.me = this.appService.me['_id'];
        console.log(this.me)
  }
ngOnChanges() {
    this.me = this.appService.me;
   
  }

addorder(){
console.log(this.addmeal)
  this.ordersservice.addmeal(this.addmeal).subscribe(
      data => {})

}
deletemeal(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var meal_id = idAttr.nodeValue;
   console.log(meal_id)
   var meal={id:meal_id,orderid:this.order.id} 
 this.ordersservice.deletemeal(meal).subscribe(
      data => { console.log(data)})

}
statuscheck(){

  if (this.order.status=="waiting")
  {  return true
    }
    return false
}
  ngOnInit() {
    
  }

}
