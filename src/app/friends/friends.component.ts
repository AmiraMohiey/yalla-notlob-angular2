import { Component, OnInit ,DoCheck} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FriendsService } from './friends.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  
})
export class FriendsComponent implements OnInit ,DoCheck{


  msg=""
  friendemail= '';
  newfriend= { id: '',name: '', avatar: ''};
  error= '';
  friends= [];

constructor(private friendsService: FriendsService) {}
ngDoCheck(){ this.friendsService.getFriends().subscribe(
      data => {
        const keyArr = [];
        for (const key in data) {
          keyArr.push(data[key]);
          
        }
        this.friends = keyArr;
        
      }
    );

}
  ngOnInit() {
    this.friendsService.getFriends().subscribe(
      data => {
        const keyArr = [];
        for (const key in data) {
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
   
this.msg='friend added successfully'
 this.friendemail=''//last step to empty the text fielf
  }
unfriend(event){

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var friend_id = idAttr.nodeValue;
    console.log(friend_id);
}

}
