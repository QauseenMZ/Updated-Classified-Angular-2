import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Vehicle } from '../model/Ads';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css'],
  inputs: ['ad_list', 'type'],
  outputs: [ 'onDel' ]
})
export class AdListComponent implements OnInit {
  
  ad_list: any[];
  type: string;
  onDel: EventEmitter<any>;
  
  constructor() { 
     this.onDel = new EventEmitter<any>();
  } 

  OnDel(ad_del: any){
    //alert('recieved');
    this.onDel.emit(ad_del);
  }


  ngOnInit() {
   // alert(this.ad_list);
  }

}
