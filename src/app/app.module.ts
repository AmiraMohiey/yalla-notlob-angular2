import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { FacebookModule } from 'ng2-facebook-sdk';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routing} from './app.routing';

import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { AddorderComponent } from './addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupdetailsComponent } from './groups/groupdetails.component';
import { ViewnotificationComponent } from './viewnotification/viewnotification.component';

import { AppService } from './app.service';
import {SignupService} from './signup/signup.service';
import {LoginService} from './login/login.service';
import {FriendsService} from './friends/friends.service';
import {GroupsService} from './groups/groups.service';
import { Guard } from './guard';
import { OrdersService } from './orders/orders.service';
import { NotificationsService } from './viewnotification/notifications.service';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'x-access-token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FriendsComponent,
    AddorderComponent,
    OrdersComponent,
    VieworderComponent,
    GroupsComponent,

    ViewnotificationComponent,

    GroupdetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FacebookModule.forRoot()
  ],
  providers: [AppService, SignupService, LoginService, FriendsService, GroupsService, OrdersService, Guard,NotificationsService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
