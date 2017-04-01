import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Headers, Http } from '@angular/http';

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


  constructor(private http: Http) { }

  ngOnInit() {
  }

  sendRegData() {
    const body = JSON.stringify(this.user);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.post('https://notlob-2eee7.firebaseio.com/user.json', body, {headers: headers}).subscribe(
      data => console.log(data)
    );
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
    if (this.user.password !== this.confirm) {
      this.error = 'passwords don\'t match';
    } else {
      this.sendRegData();
      this.error = '' ;
    }

  }
}
