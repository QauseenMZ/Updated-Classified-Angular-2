import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {  Router,  ActivatedRoute } from '@angular/router';
import { AllAds } from '../model/Ads';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css'],
  inputs:['item', 'index'],
  outputs: [ 'onDel' ]
})
export class AdDetailsComponent implements OnInit {
  
  index: number;
  item: any;
  type: string;
  dash: boolean = true;
  onDel: EventEmitter<any>;
  ad: EventEmitter<any>;
  
  constructor(private router: Router, public aa: AllAds) { 
    this.onDel = new EventEmitter<any>();
    this.ad = new EventEmitter<any>();
  }

  del()
  {   
    this.onDel.emit(this.item);
     //alert('working');
  }

  view(){
  this.router.navigate(['details'],{ queryParams: { 'id': this.index, 'type': this.item.category } });
  }

  ngOnInit() {}

}
