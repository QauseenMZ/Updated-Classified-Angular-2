import { Component, OnInit } from '@angular/core';
import { AllAds , Vehicle, MobTab, HomeAppliance } from '../model/Ads';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  veh_array: Vehicle[]=[];
  mt_array: MobTab[]=[];
  ha_array: HomeAppliance[]=[];

  constructor(public aa: AllAds){
    this.veh_array= this.aa.veh_ad_arr;
    this.mt_array= this.aa.mt_ad_arr;
    this.ha_array= this.aa.happ_ad_arr;
 }

  ngOnInit() {
  }

}
