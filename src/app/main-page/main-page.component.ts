import { Component, OnInit } from '@angular/core';
import { AllAds } from '../model/Ads';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  recentAds: any[]=[];

  constructor(public aa: AllAds){
    this.recentAds=this.aa.recentAds();
    //console.log(this.aa.veh_ad_arr.filter((i) => i.owner =="QMZ" && i.validity == true).toString());
  }

  ngOnInit(){
  }

}
