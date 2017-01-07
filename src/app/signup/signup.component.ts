import { Component, OnInit } from '@angular/core';
import { UsersService } from '../model/user';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fname: string;
  lname: string;
  email: string;
  pass: string;

  constructor(public userService: UsersService, private router: Router) { }

signup(form: any)
  {
    console.log(this.email);
    this.userService.signup(this.fname, this.lname,this.email,this.pass);
    //this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
