import { Injectable, Inject } from '@angular/core';
import {  Router,  ActivatedRoute } from '@angular/router';

class Users{
    fname: string;
    lname: string;
    email: string;
    password: string;

    constructor(fn: string, ln:string, e:string, p:string){
        this.fname= fn;
        this.lname= ln;
        this.email=e;
        this.password=p;
    }
}

@Injectable()
export class UsersService{
  auth: any;
  users: Users[]=[];

  signup(fn: string, ln:string, e:string, p:string)
  {
      if (!e || !p) {
        alert('email and password required');
      }
      //Register user in Firebase
      this.auth.createUserWithEmailAndPassword(e, p)
        .catch(function(error) {
          console.log('Error in Registeration', error);
        });
      this.users.push(new Users(fn, ln, e, p));
      localStorage.setItem("users",JSON.stringify(this.users));
      localStorage.setItem("login","true");
      localStorage.setItem("current_email",e);
    
      alert("Registered");
  }

  constructor(private router: Router){
      this.auth= firebase.auth();
  }

  signIn(e: string, p:string)
  {
    localStorage.setItem("login","false");
    let eIn = e;
    let pIn=  p;
    
    // SignIn Using Firebase
      this.auth.signInWithEmailAndPassword(e, p)
        .then(
        (success) => {
           localStorage.setItem("login","true");
           localStorage.setItem("current_user",this.users[i].fname);
           localStorage.setItem("current_email",this.users[i].email);
           alert("Signed In!!");
          this.router.navigate(['']); //----> navigate to main page after success
        }).catch(function(error) {
          console.log('signIn error', error);
           });

    //Localhost 
    this.users = JSON.parse(localStorage.getItem("users"));
    
    if (this.users != null) {
      
       for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].email === eIn && this.users[i].password === pIn) {
           localStorage.setItem("login","true");
           localStorage.setItem("current_user",this.users[i].fname);
           localStorage.setItem("current_email",this.users[i].email);
           alert("Signed In!!");
       }
      }
      
      if (localStorage.getItem("login") === "false") {
        alert("Please Enter right details or Sign up!");
      }
      
    }
    
    else{
      alert('Please Enter right details or Sign up!');
    }
   }
}