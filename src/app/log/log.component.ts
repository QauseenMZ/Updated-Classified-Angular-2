import { Component, OnInit } from '@angular/core';
import { UsersService } from '../model/user';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  email: string;
  pass: string;
  
  constructor(public userService: UsersService) { 
  }
  
  
  signIn(form: any)
  {
    this.userService.signIn(form['email'],form['pass']);
    
   }
     

  ngOnInit() {
  }

}
