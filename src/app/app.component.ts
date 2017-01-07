import { Component, OnInit } from '@angular/core';
import { AllAds , Vehicle } from './model/Ads';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  showDashboard: boolean = false;
  currentUser: string='';
  veh_array: Vehicle[]=[];
  auth: any;

  constructor(public aa: AllAds, private router: Router){
    this.auth= firebase.auth();
    this.veh_array= this.aa.veh_ad_arr;
    //console.log(this.aa.veh_ad_arr.filter((i) => i.owner =="QMZ" && i.validity == true).toString());
  }

   signOut()
  {
     localStorage.setItem("login","false");
     alert("Signed Out!!");
     this.router.navigate(['']);
  }
  
  ngOnInit(){
    if(localStorage.getItem("login") == "true"){
      this.showDashboard = true;
      this.currentUser = localStorage.getItem("current_user");
    }
  }
}
