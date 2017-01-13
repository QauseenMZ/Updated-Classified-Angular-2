import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export class Ad{
    
    title: string;
    owner: string;
    contact_num: number;
    price: number;
    area: string;
    img: string;
    category: string; 
    postedBy: string;
    validity: boolean;
    
    constructor(pb:string,t:string, o: string, cn: number, p:number, a:string, i:string, c:string){
        this.validity= true;
        this.postedBy= pb;
        this.title= t;
        this.owner=o;
        this.contact_num= cn;
        this.price=p;
        this.area=a;
        this.img=i;
        this.category=c;
    }
}

export class Vehicle extends Ad{
    brand: string;
    model: number;
    kms_driven: number;
    features: string;
    
    constructor(pb:string, t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, m:number, kms:number,f:string){
        super(pb,t,o,cn,p,a,i,c);
        this.brand=b;
        this.model=m;   
        this.kms_driven=kms;
        this.features=f;    
    } 
}  

export class HomeAppliance extends Ad{
     type: string;
    condition_details: string;
    
    constructor(pb:string, t:string, o: string, cn: number, p:number, a:string, i:string, c:string, ty:string, cd:string){
        super(pb,t,o,cn,p,a,i,c);
        this.type=ty;
        this.condition_details=cd;
    }
}

export class MobTab extends Ad{
    brand: string;
    warrenty: string;
    accessories: string;
    details: string;
    
    constructor(pb:string, t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, w:string, ac:string, d:string){
        super(pb,t,o,cn,p,a,i,c);
        this.brand=b;
        this.warrenty=w;
        this.accessories=ac;
        this.details=d;    
    }
}


@Injectable()
export class AllAds{

    wishList: any[]=[];
    item_v: FirebaseListObservable<any[]>;
    item_mt: FirebaseListObservable<any[]>;
    item_ha: FirebaseListObservable<any[]>;
    

    veh_ad_arr: Vehicle[] =[
            new Vehicle(localStorage.getItem("current_email"),"Vitz 2006 for Sale!","QMZ",3475929,8000000,"Karachi","assets/img/c4.PNG","Vehicle","Vitz",2006,90000,"In new Condition!"),
            new Vehicle(localStorage.getItem("current_email"),"Silver Toyota 2003","Amjad",13278291,650000,"Lahore","assets/img/c1.PNG","Vehicle","Toyota",2004,800000,"Excellent Working Condition! Only serious buyers contact please."),
            new Vehicle(localStorage.getItem("current_email"),"Civic 2013 Brand New Condition","Mahtab",37892611,1050000,"Faislabad","assets/img/c2.PNG","Vehicle","Honda",2013,50000,"Brand new condition. Price is negotiable."),
            new Vehicle(localStorage.getItem("current_email"),"Classic Red Nissan ","Raheel",13278291,650000,"Lahore","assets/img/c3.PNG","Vehicle","Toyota",2004,800000,"Urgent for sale. Only serious buyers contact please."),
            new Vehicle(localStorage.getItem("current_email"),"Cab 10-Seater","Arslan",13278291,650000,"Karachi","assets/img/c5.PNG","Vehicle","Toyota",2004,800000,"Excellent Condition! Urgent for sale. Only serious buyers contact please. ")
            ];  
    veh: Vehicle[]= this.veh_ad_arr;


    mt_ad_arr: MobTab[]=[
      new MobTab(localStorage.getItem("current_email"),"Samsung Galaxy S1","Arslan",13278291,15000,"Karachi","assets/img/m1.PNG","MobTabs","Samsung","8 months warrenty","With Box, ear-phones, charger, 8GB-memory card","Price Negotiable. In new Condition!"),
      new MobTab(localStorage.getItem("current_email"),"Noir i2","Sajid",13278291,7000,"Lahore","assets/img/m2.PNG","MobTabs","Q-Mobile","3 months warrenty","With Box, ear-phones and charger","In excellent Condition! Only serious buyers contact please."),
      new MobTab(localStorage.getItem("current_email"),"Samsung Tablet","Amjad",13278291,17000,"Faisalabad","assets/img/m3.PNG","MobTabs","Samsung","No warrenty","With Box and charger","Urgent for Sale."),
      new MobTab(localStorage.getItem("current_email"),"Sony Noir-i5 ","Raheel",13278291,12000,"Abbotabad","assets/img/m4.PNG","MobTabs","Sony Ericcson","12 months warrenty","With complete accessories!","Only 3 months used! In brand new Condition!"),
      ];
    mt: MobTab[]= this.mt_ad_arr;


    happ_ad_arr: HomeAppliance[]=[
    new HomeAppliance(localStorage.getItem("current_email"),"Microwave Oven","Arslan",13278291,1500,"Karachi","assets/img/a1.PNG","HomeApp","Microwave","In Excellent working conditions!"),
    new HomeAppliance(localStorage.getItem("current_email"),"5-in-1 Cooking and Baking Oven","Sajid",13278291,3000,"Lahore","assets/img/a2.PNG","HomeApp","Oven","Brand New Oven, only used for 2 years. Price Negotiable."),
    new HomeAppliance(localStorage.getItem("current_email"),"Set of Two Washing Machines","Amjad",13278291,17000,"Faisalabad","assets/img/a3.PNG","HomeApp","Washing Machine","Available for whole-Sale."),
    new HomeAppliance(localStorage.getItem("current_email"),"King Size Bed","Raheel",13278291,12000,"Abbotabad","assets/img/a4.PNG","HomeApp","Furniture","Excellent conditions!"),
    ];
    ha: HomeAppliance[]= this.happ_ad_arr;

    // constructor(@Inject(veh_ad_arr) public veh_ad_arr: Vehicle[]){} -> doesnt work
   
    newVehicle(t:string, cn: number, p:number, a:string, i:string, c:string, b:string, m:number, kms:number,f:string):void{
            this.veh_ad_arr.push(new Vehicle(localStorage.getItem("current_email"),t,localStorage.getItem("current_user"),cn,p,a,i,c,b,m,kms,f)); //how is it accepting text input as number
            localStorage.setItem("vehicles",JSON.stringify(this.veh_ad_arr));
            this.item_v.push(new Vehicle(localStorage.getItem("current_email"),t,localStorage.getItem("current_user"),cn,p,a,i,c,b,m,kms,f)
            );
            alert('New Vehicle Added!');
 
    }
    
    newMobTab(t:string, cn: number, p:number, a:string, i:string, c:string, b:string, w:string, ac:string, d:string):void{
            this.mt_ad_arr.push(new MobTab(localStorage.getItem("current_email"),t,localStorage.getItem("current_user"),cn,p,a,i,c,b,w,ac,d)); //how is it accepting text input as number
            localStorage.setItem("mobTabs",JSON.stringify(this.mt_ad_arr));
            this.item_mt.push(new MobTab(localStorage.getItem("current_email"),t,localStorage.getItem("current_user"),cn,p,a,i,c,b,w,ac,d)
            );
            alert('New MobTab Ad Added!');
 
    }

    newHomeApp(t:string, cn: number, p:number, a:string, i:string, c:string, ty:string, cd:string):void{
            this.happ_ad_arr.push(new HomeAppliance(localStorage.getItem("current_email"),t,localStorage.getItem("current_user"),cn,p,a,i,c,ty,cd)); //how is it accepting text input as number
            localStorage.setItem("homeApps",JSON.stringify(this.mt_ad_arr));
            this.item_ha.push(new HomeAppliance(localStorage.getItem("current_email"),t,localStorage.getItem("current_user"),cn,p,a,i,c,ty,cd)
            );
            alert('New Home Appliance Ad Added!');
 
    }

    recentAds(): any[]{
        let vi = this.veh_ad_arr.length;
        let mi = this.mt_ad_arr.length;
        let hi = this.happ_ad_arr.length;
        let recentAds: any[]=[
            this.veh_ad_arr[vi-1] ,   this.mt_ad_arr[mi-1],     this.happ_ad_arr[hi-1],
            this.veh_ad_arr[vi-2] ,   this.mt_ad_arr[mi-2],     this.happ_ad_arr[hi-2],
            this.veh_ad_arr[vi-3],    this.mt_ad_arr[mi-3],
            // this is done to get last to recent ads in respective arrays ;)
        ];
        
        return recentAds;
    }

    getItemDetails(u: string, type: string, title: string): any{
        let item: any[]=[];
        console.log(type, title);
        if(type =="Vehicle" ){
            item= this.veh_ad_arr.filter((i) => i.postedBy == u && i.validity == true && i.title == title);                   
        }
        else if(type =="MobTabs"){
             item = this.mt_ad_arr.filter((i) => i.postedBy == u && i.validity == true 
                                       && i.title == title); 
        }
        else if(type =="HomeApp"){
             item = this.happ_ad_arr.filter((i) => i.postedBy == u && i.validity == true 
                                      && i.title == title); 
        }
        return item[0];
    }

     deleteItem(index: number, type: string): boolean{
        // this.veh_ad_arr.splice(index,1);
        //         console.log(this.veh_ad_arr);
        if(type =="vehicle" ){
            this.veh_ad_arr[index].validity = false;
            localStorage.setItem("vehicles",JSON.stringify(this.veh_ad_arr));
            console.log(this.veh_ad_arr);
        }
        else if(type =="Mobile&Tablets"){
            this.mt_ad_arr[index].validity = false;
            localStorage.setItem("mobTabs",JSON.stringify(this.mt_ad_arr));            
            console.log(this.mt_ad_arr);
        }
        else if(type =="HomeApps"){
            this.happ_ad_arr[index].validity = false;
            localStorage.setItem("homeApps",JSON.stringify(this.happ_ad_arr));
            console.log(this.happ_ad_arr);
        }
        return true;

    }

     addToWishList(type: string, index: number){
        // this.wishList.push({type,index});
        // alert("ADDED TO WISH LIST");         ----->>> proper
        if(type =="vehicle" ){
            this.wishList.push(this.veh_ad_arr[index]);
        }
        else if(type =="Mobile&Tablets"){
            this.wishList.push(this.mt_ad_arr[index])
        }
        else if(type =="HomeApps"){
            this.wishList.push(this.happ_ad_arr[index]);
        }
        localStorage.setItem("wishList",JSON.stringify(this.wishList));
        alert("ADDED TO WISH LIST");
  }
    constructor(public af: AngularFire){
        if(localStorage.getItem("vehicles") === null ){
        localStorage.setItem("vehicles",JSON.stringify(this.veh_ad_arr));
        localStorage.setItem("mobTabs",JSON.stringify(this.mt_ad_arr));
        localStorage.setItem("homeApps",JSON.stringify(this.happ_ad_arr));
        alert('Ads are saved');
        }
        else{
        this.veh_ad_arr = JSON.parse(localStorage.getItem("vehicles"));
        this.mt_ad_arr = JSON.parse(localStorage.getItem("mobTabs"));
        this.happ_ad_arr = JSON.parse(localStorage.getItem("homeApps"));
        this.wishList = JSON.parse(localStorage.getItem("wishList"));
        // console.log(this.veh_ad_arr);
        }

        this.item_v = af.database.list('/Vehicles', { preserveSnapshot: true }); ////(y)
        this.item_v.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            this.veh.push(snapshot.val());
        });
    })

        this.item_mt = af.database.list('/MT', { preserveSnapshot: true }); ////(y)
        this.item_mt.push(
             new MobTab(localStorage.getItem("current_email"),"Q-Mobile qN-174","Arslan",13278291,5000,"Karachi","assets/img/m5.PNG","MobTabs","Q-Mobile","No warrenty","Box, ear-phones and charger available","In new Condition!")
        );
            this.item_mt.subscribe(snapshots => {
            snapshots.forEach(snapshot => {
                 this.mt.push(snapshot.val());
            });
        })

        this.item_ha = af.database.list('/HomeApp', { preserveSnapshot: true }); ////(y)
        this.item_ha.push(
            new HomeAppliance(localStorage.getItem("current_email"),"Food Factory-Complete Set","Arslan",13278291,2500,"Karachi","assets/img/a5.PNG","HomeApp","Sofa","Un-used Pack. Available for Sale.")
        );
        this.item_ha.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
            this.ha.push(snapshot.val());
        });
    })
    }
    ngOnInit(){
  }
}
