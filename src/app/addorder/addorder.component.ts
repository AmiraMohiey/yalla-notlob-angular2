import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { Router } from '@angular/router';
import { FriendsService } from '../friends/friends.service';
import { GroupsService } from '../groups/groups.service';

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

userfriends=[]
usergroups

constructor( private ordersservice: OrdersService ,private router :Router,private friendservice:FriendsService,private groupservice:GroupsService) { }
ngOnInit() { 
  this.getfriends();
  this.getgroups();
   }
onclicked(){
   console.log(this.order)

  this.ordersservice.addorder(this.order).subscribe(
      data => { console.log(data)
               this.router.navigate(["orders"])
      })
}
isgroup(){

  if(this.invited=="group")

{
  return true
}
  else {return false}
}


getfriends(){
   this.friendservice.getFriends().subscribe(
      data => {
        const keyArr = [];
        for (const key in data.friends) {
          keyArr.push(data.friends[key].username);
        }
        this.userfriends = keyArr;
 console.log("user",this.userfriends)
        
      }
    );
  }

getgroups(){
   this.groupservice.listGroups().subscribe(
      data => { console.log(data)
        this.usergroups= data.owner;
        console.log( "groups",this.usergroups)
      }
    );
}
}


