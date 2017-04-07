import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { OrdersService } from './orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders
me = {};
  // orders = [{ id: "1", for: "breakfast", restaurant: "shbrawy", invited_no: "10", joined_no: "5", status: "waiting", meal: [{ id: "1", comment: "no salt", amount: "2", price: "8", item: "fries", person: "amira" }], joined: ["amira", "salma", "mohamed"], invitedgroups: [], invitedfriends: ["amira", "salma", "mohamed", "lina"] },
  // { id: "2", for: "lunch", restaurant: "mac", invited_no: "50", joined_no: "20", status: "finished", meal: [{ id: "2", comment: "", amount: "", price: "", item: "", person: "" }], joined: [], invitedgroups: [], invitedfriends: [] }]
  constructor(private router: Router,private ordersservice: OrdersService) { }

  ngOnInit() {
     this.getorders ();
  }
  
  getorders(){

      this.ordersservice.getorders().subscribe(
      data => {
        const keyArr = [];
        for (const key in data) {
          console.log(data)
          keyArr.push(data[key]);
        }
        this.orders = keyArr;
      }
    );
  }
  finish(event: any) {

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;
  }

  cancel(event: any) {

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;
    console.log(order_id)
    this.ordersservice.cancelorder(order_id).subscribe(
      data => { this.getorders()})
  }

  hidebutton($event: any) {
    if ($event == "finished")
    { return false }
    return true;
  }



  view(event: any) {

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var order_id = idAttr.nodeValue;

    var order = { id: "", for: "", resturant: "", invited_no: "", joined_no: "", status: "", meal: [{ id: "", comment: "", amount: "", price: "", item: "", person: "" }], joined: [], invitedgroups: [], invitedfriends: [] }
    for (var i = 0; i < this.orders.length; i++) {

      if (this.orders[i].id == order_id) {
        order = this.orders[i];
      }
    }
   
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "order": JSON.stringify(order)

      }
    }



    this.router.navigate(["vieworder"], navigationExtras);
  }

}
