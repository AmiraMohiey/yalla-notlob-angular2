import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friendemail="";
  newfriend={name:"",avatar:""}
  error="";
  friends=[{"name":"amira","avatar":"../assets/u.png"},
           {"name":"salma","avatar":"../assets/u.png"}]
  constructor() {}
  ngOnInit() {}
   onSubmit(form: NgForm) {
    console.log(this.friendemail);
 
  if(this.friendemail!="")
 { this.newfriend.name=this.friendemail; 
   this.newfriend.avatar="../assets/u.png" 
this.error="";}
 else {this.error="no such user"
}
  

  }


}
