import {Component, OnChanges, OnInit} from '@angular/core';
import {GroupsService} from './groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit, OnChanges {
  groups = {member: [], owner: []};
  owner;
  addedgroupname = '';
  error = '';
  msg = '';
  groupselected;

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.listGroups();
  }

  ngOnChanges() {
    this.listGroups();
  }

  listGroups() {
    this.groupsService.listGroups().subscribe(
      data => {
        this.groups = data;
      }
    );
  }

  deletegroup(group_id) {
    this.error = '';
    this.msg = '';
    this.groupsService.deleteGroup(group_id).subscribe(
      data => {
        if (data.success) {
          this.msg = 'Group deleted successfully';
          this.listGroups();
        } else {
          this.error = data.error;
        }
      }
    );
  }

  addgroup() {
    if (this.addedgroupname == '') {
      this.error = 'can\'t leave group name empty';
      this.msg = '';
    } else {
      this.error = '';
      this.groupsService.addGroup(this.addedgroupname).subscribe(
        data => {
          if (data.success) {
            this.msg = 'Group ' + this.addedgroupname + ' added successfully';
            this. addedgroupname = ''
            this.listGroups();
          }else {
            this.msg = '';
            this.error = data.error;
          }
        }
      );
    }
   ; }

  onclickedmy(group) {
    this.msg = '';
    this.error = '';
    this.groupselected = group;
    this.owner = true;
  }

  onclickedin(group) {
    this.msg = '';
    this.error = '';
    this.groupselected = group;
    this.owner = false;
  }

}
