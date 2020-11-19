import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Item } from '../models/item'
import { OrderList } from '../models/order-list'
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupForm= new FormGroup({
    name: new FormControl("",Validators.required),
    userName:new FormControl("",Validators.required),
    password:new FormControl("",[Validators.required,Validators.minLength(8)]),
    email:new FormControl("",[Validators.required,Validators.email])
    })
    currentOrder:OrderList[]=new Array();
  cardArr:Item[]= new Array();
  temp:Item;
  currentItemCount:number;
  currentCartCount:number;
  currentUsername:string;
  currentCategory:string;
  loggedin:boolean;
  userCount:number;
  allUsers:any[]=new Array();  
    constructor(public activatedRoute:ActivatedRoute,public router:Router, public talkWithDbService:DbServiceService) {
    this.currentCartCount=0;
   }

  ngOnInit(): void {
    this.talkWithDbService.countAllOrders().subscribe((data)=>{
      //console.log("Get all orders",data);
      this.currentOrder=data as OrderList[];
      console.log("Get all orders",this.currentOrder);
      for(let i=0;i<this.currentOrder.length;i++)
      {
        this.currentCartCount+=this.currentOrder[i]['itemQuantity'];
        //console.log("After login cart count", this.currentOrder[i]);
      }
      
    },
    (err)=>{
      console.log(err);
    });
  }

  signUpEventHandler(){
    var user={
      name:this.signupForm.value.name,
      userName:this.signupForm.value.userName,
      password:this.signupForm.value.password,
      email:this.signupForm.value.email
    }
    this.talkWithDbService.registerUser(user).subscribe((data)=>{
      //console.log(data);
    },
    (err)=>{
      console.log(err);
    });
    alert("Sign Up completed. Click Ok to move to login page.");
    this.router.navigateByUrl("/login");
  }

}
