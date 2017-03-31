import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() loggedin;
  constructor(private appService: AppService) { }
  changeStatus(){
    this.appService.setLoggedin(!this.appService.checkStatus());
  }
  ngOnInit() {}
}
