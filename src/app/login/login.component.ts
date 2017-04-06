import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg = '';
  error = '';
  logins = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.msg = params['msg'];
    });
  }


  sendData() {
    this.loginService.sendLoginData(this.logins).subscribe(
      data => console.log(data)
    );
  }

  onSubmit(form: NgForm) {
    console.log(this.logins);
    this.sendData();
  }

  ngOnInit() {
  }

}
