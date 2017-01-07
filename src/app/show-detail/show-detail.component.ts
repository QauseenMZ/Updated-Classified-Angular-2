import { Component, OnInit } from '@angular/core';
import {  Router,  ActivatedRoute } from '@angular/router';
import { AllAds } from '../model/Ads';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  item: any;
  item_id: number;
  item_type: string;

  constructor(private route: ActivatedRoute, aserve: AllAds) {
    this.route
      .queryParams //can your params here insteat queryParams
      .subscribe(params => this.item_id = params['id'] || 'None',
                 params => this.item_type = params['type'] || 'None');
    this.route
      .queryParams //can your params here insteat queryParams
      .subscribe( params => this.item_type = params['type'] || 'None');

      this.item= aserve.getItemDetails(this.item_id, this.item_type);
    
    // alert(this.item);
   }

  ngOnInit() {
  }

}
