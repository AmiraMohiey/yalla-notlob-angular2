import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routing} from './app.routing';
import { AppService } from './app.service';
import {SignupService} from './signup/signup.service';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { AddorderComponent } from './addorder/addorder.component';
import { OrdersComponent } from './orders/orders.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { GroupsComponent } from './groups/groups.component';

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
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
