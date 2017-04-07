import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FriendsService } from './friends.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {


//   friendemail="";
//   newfriend={name:"",avatar:""}
//   error="";
//   friends=[{"name":"amira","avatar":"../assets/u.png"},
//            {"name":"salma","avatar":"../assets/u.png"}]
//   constructor() {}
//   ngOnInit() {}
//    onSubmit(form: NgForm) {
//     console.log(this.friendemail);

//   if(this.friendemail!="")
//  { this.newfriend.name=this.friendemail;
//    this.newfriend.avatar="../assets/u.png"
// this.error="";}
//  else {this.error="no such user"
// }

// =======

  friendemail= '';
  newfriend= { id: '',name: '', avatar: ''};
  error= '';
  msg= '';
  friends;

  constructor(private friendsService: FriendsService) {}

  ngOnInit() {
    this.getFiends ();
  }

  getFiends () {
    this.friendsService.getFriends().subscribe(
      data => {
        const keyArr = [];
        for (const key in data.friends) {
          keyArr.push(data.friends[key]);

        }
        this.friends = keyArr;
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
        }else{
          this.error = data.error;
        }
      }
    );
  // if no username { error="sorry no such user"}


  }

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
