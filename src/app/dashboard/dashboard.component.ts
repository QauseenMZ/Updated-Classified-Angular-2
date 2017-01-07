import { Component, OnInit } from '@angular/core';
import { AllAds , Vehicle } from '../model/Ads';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  // inputs: [ 'ads' ],
})
export class DashboardComponent implements OnInit {

  ads: string;
  type: string= "Vehicle";
  dash_veh_array: Vehicle[]=[];

  constructor(public aa: AllAds) {
    this.dash_veh_array= this.aa.veh_ad_arr.filter((i) => i.owner =="QMZ" && i.validity == true);
    console.log(this.dash_veh_array);
  }

  del(ad_del: any){
    let id= this.aa.veh_ad_arr.indexOf(ad_del);
    if (id !== -1) {
        this.aa.veh_ad_arr[id].validity= false;
        alert('Deleted');
        console.log(this.aa.veh_ad_arr[id].validity)
    }
    else{
      alert('Cannot delete for now');
    }
  }

  ngOnInit() {
  }

}
