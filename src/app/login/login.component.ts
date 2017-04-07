import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { LoginService } from './login.service';
import {ActivatedRoute} from '@angular/router';
import {Router, NavigationExtras} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';

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
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private appService: AppService, private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.msg = params['msg'];
    });
  }


  sendData() {
    this.loginService.sendLoginData(this.logins).subscribe(
      data => {
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          this.appService.setLoggedin(true);
          this.appService.me = this.jwtHelper.decodeToken(data.token)._doc;
          this.router.navigate(['home']);
        }else {
          this.error = data.msg;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    this.sendData();
  }

  ngOnInit() {
  }

}
