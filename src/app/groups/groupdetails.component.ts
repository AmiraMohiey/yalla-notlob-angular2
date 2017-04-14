import {Component, OnInit, Input, group} from '@angular/core';
import {GroupsService} from "./groups.service";
import {GroupsComponent} from "./groups.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.css']
})
export class GroupdetailsComponent implements OnInit {
  @Input() groupselected;
  @Input() owner;
  addeduser= '';
  error= '';
  msg= '';

  constructor( private groupsService: GroupsService ,private router:Router) { }

  ngOnInit() {
  }

  addtogroup() {
    if (this.addeduser === '') {
      this.error = 'please enter user email';
    } else {
      this.error = '';
      const id = this.groupselected._id;
      this.groupsService.addGroupMember({id: id, email: this.addeduser}).subscribe(
        data => {
          if (data.success) {
            this.msg = 'friend added successfully';
            this.router.navigate(["direct"]);
          }else {
            this.error = data.error;
          }
        }
      );
    }
  }

  deleteuserfromgroup(user_id) {
    this.groupsService.deleteGroupMember({id: this.groupselected._id, userid: user_id}).subscribe(
      data => {
        if (data.success) {
          this.msg = 'friend deleted successfully';
          this.router.navigate(["direct"]);
        }else {
          this.error = data.error;
        }
      }
    );
  }


}
