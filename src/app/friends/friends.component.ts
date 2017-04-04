import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friendemail="";
  error="";
  friends=[{"name":"amira","avatar":"../assets/u.png"},
           {"name":"salma","avatar":"../assets/u.png"}]
  constructor() {}
  ngOnInit() {}
   onSubmit(form: NgForm) {
    console.log(this.friendemail);
  //if no username { error="sorry no such user"}

  }


}
