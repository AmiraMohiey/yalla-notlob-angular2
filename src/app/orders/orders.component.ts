import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders=[{id:"1",for:"breakfast",restaurant:"shbrawy",invited_no:"10",joined_no:"5",status:"waiting",meal:[{comment:"no salt",amount:"2",price:"8",item:"fries",person:"amira"}],joined:["amira","salma","mohamed"],invitedgroups:[],invitedfriends:["amira","salma","mohamed","lina"]},
        {id:"2",for:"lunch",restaurant:"mac",invited_no:"50",joined_no:"20",status:"finished",meal:[{comment:"",amount:"",price:"",item:"",person:""}],joined:[],invitedgroups:[],invitedfriends:[]}]
  constructor(private router: Router) { }

  ngOnInit() {
  }
finish(event: any){

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;
  }

cancel(event: any){

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;
  }

hidebutton($event: any){
 if($event=="finished")
 {return false}
 return true;
}
view(event: any){

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;
    var order={id:"",for:"",restaurant:"",invited_no:"",joined_no:"",status:"",meal:[{comment:"",amount:"",price:"",item:"",person:""}],joined:[],invitedgroups:[],invitedfriends:[]}
    for (var i = 0; i < this.orders.length; i++) {

if (this.orders[i].id==order_id){
  order=this.orders[i];
}
  }
  // console.log(order)
 let navigationExtras: NavigationExtras = {
            queryParams: {
                "order": JSON.stringify(order)
                
            }
 }


  
  this.router.navigate(["vieworder"], navigationExtras);
}

}
