import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shop/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SlideshowComponent} from './shop/slideshow/slideshow.component';
import {RegistrationComponent} from './shop/registration/registration.component';
import {ShoutoutComponent} from './shop/shoutout/shoutout.component';
import {AllshopsComponent} from './shop/allshops/allshops.component';
import {AddnewshopComponent} from './shop/addnewshop/addnewshop.component';
import {ShopdetailComponent} from './shop/shopdetail/shopdetail.component';
import {ContactusComponent} from './shop/contactus/contactus.component';
import {AboutusComponent} from './shop/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    RegistrationComponent,
    ShoutoutComponent,
    AllshopsComponent,
    AddnewshopComponent,
    ShopdetailComponent,
    ContactusComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
