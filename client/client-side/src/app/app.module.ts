import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DbServiceService } from './db-service.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { MenItemsComponent } from './men-items/men-items.component';
import { SportsItemsComponent } from './sports-items/sports-items.component';
import { WomenItemsComponent } from './women-items/women-items.component';
import { KidsItemsComponent } from './kids-items/kids-items.component';
import { ElectronicsItemsComponent } from './electronics-items/electronics-items.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LoginPageComponent,
    HomePageComponent,
    CheckOutComponent,
    ViewCartComponent,
    MenItemsComponent,
    SportsItemsComponent,
    WomenItemsComponent,
    KidsItemsComponent,
    ElectronicsItemsComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [DbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
