import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Headers, Http } from '@angular/http';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error = '';
  user = {
  name: '',
  email: '',
  username: '',
  password: ''
       };
  confirm = '';


  constructor(private http: Http, private signupService: SignupService) { }

  ngOnInit() {
  }

  sendData() {
    this.signupService.sendRegData(this.user).subscribe(
      data => console.log(data)
    );
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
    if (this.user.password !== this.confirm) {
      this.error = 'passwords don\'t match';
    } else {
      this.sendData();
      this.error = '' ;
    }

  }
}
