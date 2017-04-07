import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';
import {Router, NavigationExtras} from '@angular/router';

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
    password: '',
    image: ''
  };
  confirm = '';
  showImage = false;
  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
  }

  sendData() {
    this.signupService.sendRegData(this.user).subscribe(
      data => {
        if (data.success === true) {
          const navigationExtras: NavigationExtras = {
            queryParams: {
              'msg': 'Successful Signup.. Please login'
            }
          };
          this.router.navigate(['login'], navigationExtras);
        }else {
          this.error = data.error;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.user.password !== this.confirm) {
      this.error = 'passwords don\'t match';
    } else {
      this.sendData();
      this.error = '' ;
    }

  }

  handleFileSelect(evt) {
    this.error = '' ;
    const files = evt.target.files;
    const file = files[0];
    if (files && file ) {
      if (file.size < 5000000) {
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
          const reader = new FileReader();

          reader.onload = this._handleReaderLoaded.bind(this);

          reader.readAsBinaryString(file);
        } else {
          this.error += '\n only png and jpeg allowed';
        }
      } else {
        this.error += '\n image must be less than 5 mb';
      }
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.user.image = btoa(binaryString);
    this.showImage = true;
  }
}
