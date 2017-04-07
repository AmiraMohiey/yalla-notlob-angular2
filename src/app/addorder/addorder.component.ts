import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  invited=""
order={place:"",
for:"",
invitedfriend:"",
invitedgroup:""}

userfriends=[{name:"amira"},{name:"mohamed"}]
usergroups=[{name:"group1"},{name:"group2"}]
constructor() { }
ngOnInit() {  }
onclicked(){
  console.log(this.order,this.invited)

}
isgroup(){

  if(this.invited=="group")
{return true}
else {return false}}

}
