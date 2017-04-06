import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import {ActivatedRoute} from "@angular/router";
import {Router, NavigationExtras} from '@angular/router';

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

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.msg = params['msg'];
    });
  }


  sendData() {
    this.loginService.sendLoginData(this.logins).subscribe(
      data => {
        if (data.success === true) {
          console.log(data);
          localStorage.setItem('token', data.token);
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
