import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  addedgroupname = ""
  error = ""
  type=""
  groupselected
  groups = {
    in: [{ id: "1", name: "group in", members: [{ id: "1", name: "amira" }], owner: { id: "2", name: "mohamed" } },
    { id: "2", name: "group in2", members: [{ id: "2", name: "slma" }], owner: { id: "2", name: "mohamed" } }],
    my: [{ id: "3", name: "group owned", members: [{ id: "2", name: "mohamed" }], owner: { id: "1", name: "amira" } },
    { id: "4", name: "group owned2", members: [{ id: "3", name: "mohamedhesham" }], owner: { id: "1", name: "amiramohiey" } }]
  }

  constructor() { }

  ngOnInit() {
  }

  deletegroup(group_id) {

    console.log(group_id)
  }

  addgroup() {

    if (this.addedgroupname == "") { this.error = "can't leave group name empty" }
    else { this.error = "" }


  }
onclickedmy(group){
 console.log(group)
this.groupselected=group
this.type="my"
}
onclickedin(group){
 console.log(group)
this.groupselected=group
this.type="in"
}

}
