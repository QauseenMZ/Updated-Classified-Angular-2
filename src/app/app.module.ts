import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from './model/user';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { NewAdComponent } from './new-ad/new-ad.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { MobTabComponent } from './mob-tab/mob-tab.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SignupComponent } from './signup/signup.component';
import { Vehicle, HomeAppliance, MobTab, AllAds } from './model/Ads';
//Firebase imports:
import {fireConfig} from '../environments/firebase.config';
import { AngularFireModule, AngularFire, FirebaseListObservable, AuthMethods, AuthProviders  } from 'angularfire2';
import { ShowDetailComponent } from './show-detail/show-detail.component';

export const routes: Routes = [
{ path: '', component: MainPageComponent },
{ path: 'home', component: AppComponent },
{ path: 'vehicles', component: VehiclesComponent },
{ path: 'mobTabs', component: MobTabComponent },
{ path: 'homeAppliances', component: HomeAppComponent },
{ path: 'allCategories/vehicles', component: VehiclesComponent },
{ path: 'allCategories/mobTabs', component: MobTabComponent },
{ path: 'allCategories/homeAppliances', component: HomeAppComponent },
{ path: 'aboutUs', component: AboutUsComponent },
{ path: 'contactUs', component: ContactUsComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'allCategories', component: CategoriesComponent },
{ path: 'login', component: LogComponent },
{ path: 'newAd', component: NewAdComponent },
//{ path: 'allCategories/details/:item', component: DetailsComponent },
{ path: 'details', component: ShowDetailComponent },
{ path: 'logout', component: LogComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login/signup', component: SignupComponent }
// { path: 'search', component: SearchComponent },
// { path: 'search/results', component: SearchResultsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    NewAdComponent,
    VehiclesComponent,
    AdListComponent,
    AdDetailsComponent,
    MobTabComponent,
    HomeAppComponent,
    CategoriesComponent,
    DashboardComponent,
    MainPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    WishListComponent,
    ShowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsersService, AllAds
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
