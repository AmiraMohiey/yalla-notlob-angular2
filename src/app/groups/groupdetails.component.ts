import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-groupdetails',
  templateUrl: './groupdetails.component.html',
  styleUrls: ['./groupdetails.component.css']
})
export class GroupdetailsComponent implements OnInit {
@Input() groupselected;
@Input() type;
addeduser=""
error=""
  constructor() { }

  ngOnInit() {
  }

mine(){
  if(this.type=="my"){return true}
  return false;
}

  deleteuserfromgroup(user_id) {
    
    console.log(user_id)
  }


  addtogroup(){
    if(this.addeduser==""){this.error="please enter user email"}
    else{this.error=""
  }
  
    console.log(this.addeduser)
  }
}
