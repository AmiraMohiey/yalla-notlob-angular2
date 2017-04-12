import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FriendsService } from './friends.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})

export class FriendsComponent implements OnInit {


  friendemail = '';
  newfriend = { id: '', name: '', avatar: ''};
  error = '';
  msg= '';
  friends;

constructor(private friendsService: FriendsService) {}

  ngOnInit() {
    this.getFiends ();
  }

  getFiends () {
    this.friendsService.getFriends().subscribe(
      data => { console.log(data)
        const keyArr = [];
        for (const key in data.friends) {
          keyArr.push(data.friends[key]);
        }
        this.friends = keyArr;
        console.log(data.friends);
      }
    );
  }

  onSubmit(form: NgForm) {
    const user = {'email': this.friendemail};
    console.log(this.friendemail);
    this.friendsService.addFriend(user).subscribe(
      data => {
        if (data.success === true) {
          this.getFiends();
          this.msg = 'added ' + this.friendemail + ' successfully';
        } else {
          this.error = data.error;
        }
      }
    );
  this.friendemail = '';}

  unfriend(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var friend_id = idAttr.nodeValue;
    this.friendsService.unfriend({id: friend_id}).subscribe(
      data => {
        if (data.success === true) {
          this.getFiends();
          this.msg = 'deleted successfully';
        }else{
          this.error = data.error;
        }
      }
    );
  }

}
