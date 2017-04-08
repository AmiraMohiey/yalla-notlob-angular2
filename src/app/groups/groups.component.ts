import { Component, OnInit } from '@angular/core';
import {GroupsService} from './groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups = {member: [], owner: []};
  owner;
  addedgroupname = '';
  error = '';
  groupselected;

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.listGroups();
  }

  listGroups() {
    this.groupsService.listGroups().subscribe(
      data => {
        this.groups = data;
        console.log(this.groups);
      }
    );
  }

  deletegroup(group_id) {

    console.log(group_id);
  }

  addgroup() {
    if (this.addedgroupname == '') { this.error = 'can\'t leave group name empty'; }
    else { this.error = ''; }
  }

  onclickedmy(group) {
    this.groupselected = group;
    this.owner = true;
  }

  onclickedin(group) {
    this.groupselected = group;
    this.owner = false;
  }

}
