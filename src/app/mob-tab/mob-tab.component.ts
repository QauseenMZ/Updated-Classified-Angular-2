import { Component, OnInit } from '@angular/core';
import { AllAds, MobTab } from '../model/Ads';

@Component({
  selector: 'app-mob-tab',
  templateUrl: './mob-tab.component.html',
  styleUrls: ['./mob-tab.component.css'],
  inputs: [ 'mt_ad_arr' ]
})
export class MobTabComponent implements OnInit {

  mt_ad_arr: MobTab[]=[];
  type: string= "MobTab";
  
  constructor(public aa: AllAds) {
    this.mt_ad_arr= this.aa.mt_ad_arr;
   }

  ngOnInit() {
  }

}
