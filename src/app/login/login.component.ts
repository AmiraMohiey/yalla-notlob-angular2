import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { FacebookService, LoginResponse, InitParams, LoginOptions, AuthResponse, FacebookModule } from 'ng2-facebook-sdk';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user
  msg = '';
  error = '';
  logins = {
    email: '',
    password: ''
  };
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private appService: AppService, private loginService: LoginService, private route: ActivatedRoute, private router: Router, private fb: FacebookService) {
    this.route.queryParams.subscribe(params => {
      this.msg = params['msg'];
    });

    let initParams: InitParams = {
      appId: '1872637286325460',
      xfbml: true,
      version: 'v2.8'
    };

    const authResponse: AuthResponse = this.fb.getAuthResponse();
    this.fb.init(initParams);

  }


  sendData() {
    this.loginService.sendLoginData(this.logins).subscribe(
      data => {
        if (data.success === true) {
          localStorage.setItem('token', data.token);
          this.appService.setLoggedin(true);
          this.appService.me = this.jwtHelper.decodeToken(data.token)._doc;
          this.router.navigate(['home']);
        } else {
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
  loginwithfb() {
    console.log("fb")
    //  
    this.fb.login()
      .then((response: LoginResponse) => {

        this.fb.api('/me?fields=id,name,email,first_name,gender,picture.width(150).height(150),age_range,friends')
          .then(res => {
          this.user = res;
          console.log("user ", this.user)//user obejct 
          }
          )
          .catch(e => console.log(e));

      })
      .catch((error: any) => console.error(error));




  }
}

