import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error="";
  user={
  name:"",
  email:"",
  username:"",
  password:""
       }
confirm="";
onSubmit(form: NgForm){
  console.log(this.user);
  if(this.user.password!=this.confirm){this.error="passwords don't match"}
  else{this.error="";}

}

  constructor() { }

  ngOnInit() {
  }

}
