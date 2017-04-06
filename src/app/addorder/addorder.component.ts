import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
order={place:"",
for:"",
invitedfriend:"",
invitedgroup:""}

invitedfriends=[{name:"amira"},{name:"mohamed"}]
usergroups=[{name:"group1"},{name:"group2"}]
constructor() { }
ngOnInit() {  }
onclicked(){
  console.log(this.order.invitedfriend)
}
}
