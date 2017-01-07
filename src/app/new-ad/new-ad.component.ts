import { Component, OnInit } from '@angular/core';
import { AllAds } from '../model/Ads';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css'],
  inputs: ['cat']
})
export class NewAdComponent implements OnInit {

  cat: string='';
  log: string = localStorage.getItem('login');
  
  constructor(public aa: AllAds) { }
  
  display(b: HTMLInputElement){
    alert(b.value.toString());
  }

  newAd(form: any): void{
    if(this.cat === 'Vehicle'){
      this.aa.newVehicle(form['title'],form['contact'],form['price'],form['area'],form['img'],this.cat,form['brand'],form['model'],form['kms'],form['features']);
    }
    console.log('you submitted value:', form);
  }

  ngOnInit() {
  }

}
