import { Component, OnInit } from '@angular/core';
import { AllAds ,HomeAppliance } from '../model/Ads';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css'],
  inputs: [ 'happ_ad_arr' ]
})
export class HomeAppComponent implements OnInit {
  
  happ_ad_arr: HomeAppliance[]=[];
  type: string="HomeApp";
  
  constructor(public aa: AllAds) {
    this.happ_ad_arr= this.aa.happ_ad_arr;
   }

  ngOnInit() {
  }

}
