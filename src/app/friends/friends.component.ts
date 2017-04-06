import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FriendsService } from './friends.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friendemail= '';
  error= '';
  friends= [{'name': 'amira', 'avatar': '../assets/u.png'},
           {'name': 'salma', 'avatar': '../assets/u.png'}];

  constructor(private friendsService: FriendsService) {}

  ngOnInit() {
    this.friendsService.getFriends().subscribe(
      data => {
        const keyArr = [];
        for (let key in data) {
          keyArr.push(data[key]);
        }
        this.friends = keyArr;
      }
    );
  }

  onSubmit(form: NgForm) {
    const user = {'name': this.friendemail, 'avatar': '../assets/u.png'};
    console.log(this.friendemail);
    this.friendsService.addFriend(user).subscribe(
      data => console.log(data)
    );
  // if no username { error="sorry no such user"}

  }


}
