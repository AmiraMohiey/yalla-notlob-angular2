import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})

export class VieworderComponent implements OnInit {
order
joinedfriends
meals
invitedfriends
addmeal={comment:"",amount:"",price:"",item:"",person:""}
  constructor(private route: ActivatedRoute) {
             this.route.queryParams.subscribe(params => {
             this.order = JSON.parse(params["order"]);
             this.invitedfriends=this.order.invitedfriends;
             this.joinedfriends=this.order.joined;
             this.meals=this.order.meal;
          });
          //console.log(this.joinedfriends[0])
       
  }


addorder(){
console.log(this.addmeal)


}
  ngOnInit() {
    
  }

}
