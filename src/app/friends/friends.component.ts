import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
friends=[{"name":"amira","avatar":"../assets/u.png"},{"name":"salma","avatar":"../assets/u.png"}]
  constructor() { }

  ngOnInit() {
  }

}
