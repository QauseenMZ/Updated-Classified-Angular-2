import { Component, OnInit } from '@angular/core';
import { AllAds, Vehicle } from '../model/Ads';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  inputs: [ 'veh_ad_arr' ]
})
export class VehiclesComponent implements OnInit{
  
  veh_ad_arr: Vehicle[]=[];
  type: string= "Vehicle";
  
  constructor(public aa: AllAds) {
    this.veh_ad_arr= this.aa.veh_ad_arr;
  }

  ngOnInit() {
  }

}
