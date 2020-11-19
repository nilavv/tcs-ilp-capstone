import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import {HomePageComponent} from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
//import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ElectronicsItemsComponent } from './electronics-items/electronics-items.component';
import { MenItemsComponent } from './men-items/men-items.component';
import { KidsItemsComponent } from './kids-items/kids-items.component';
import { WomenItemsComponent } from './women-items/women-items.component';
import { SportsItemsComponent } from './sports-items/sports-items.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"admin",component:AdminDashboardComponent},
  {path:"login",component:LoginPageComponent},
  {path:"viewCart", component:ViewCartComponent},
  {path:"checkOut", component:CheckOutComponent},
  {path:"electronics",component:ElectronicsItemsComponent},
  {path:"children",component:KidsItemsComponent},
  {path:"men",component:MenItemsComponent},
  {path:"sports",component:SportsItemsComponent},
  {path:"women",component:WomenItemsComponent},
  {path:"signup", component:SignUpPageComponent},
  
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:"**", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
