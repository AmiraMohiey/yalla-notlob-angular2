import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direct',
  template: '',
  styles: ['']
})
export class DirectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
this.router.navigate(["groups"]);
  }

}
