import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import {TalkWithDbService} from '../talk-with-db.service'
import {Router} from '@angular/router';
import {Item} from '../models/item';
import {OrderList} from '../models/order-list'
import {CartItem} from '../models/cart-item'
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  currentOrder:OrderList[]=new Array();
  cardArr:CartItem[]= new Array();
  temp:Item;
  currentItemCount:number;
  currentCartCount:number;
  currentUsername:string;
  currentCategory:string;
  loggedin:boolean;
  userCount:number;
  totcalCost:number[]=new Array();
  allUsers:any[]=new Array();
  totalSum:number;
  paymentForm= new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    address:new FormControl(),
    city:new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    nameOnCard:new FormControl(),
    creditCardNumber: new FormControl(),
    expiryMonth:new FormControl(),
    expiryYear:new FormControl(),
    cvv:new FormControl()
  })
  
  constructor(public activatedRoute:ActivatedRoute,public router:Router, public talkWithDbService:DbServiceService) { 
    this.currentCartCount=0;
    this.currentItemCount=0;
    this.totalSum=0;
    //this.currentUsername="Guest";
    //this.currentCategory="men";
    this.loggedin=false;
    //console.log("first");
    this.talkWithDbService.getAllUsers().subscribe((data)=>{
      this.allUsers=data as string[];
      console.log("user count",this.allUsers[0]['userName']);
      this.currentUsername=this.allUsers[0]['userName'];
      if(this.currentUsername=="Guest")
      {
        console.log("Before login");
        //this.currentUsername="Guest";
        this.loggedin=false;
      }

      else
      {
        console.log("After login");
        //this.currentUsername=this.allUsers[1];
        this.loggedin=true;
      }
      },
      (err)=>{
        console.log(err);
    });
    //console.log(cnt);
    
  }

  ngOnInit(): void {
    // this.talkWithDbService.getAllItems().subscribe((data)=>{
    //   //console.log("Get all items",data);
    //   this.cardArr=data as Item[];
    // },
    // (err)=>{
    //   console.log(err);
    // });
    this.talkWithDbService.countAllOrders().subscribe((data)=>{
      //console.log("Get all orders",data);
      this.currentOrder=data as OrderList[];
      //console.log("Get all orders",this.currentOrder);
      for(let i=0;i<this.currentOrder.length;i++)
      {
        this.currentCartCount+=this.currentOrder[i].itemQuantity;
        var obj={
          itemId:this.currentOrder[i].itemId,
          itemName:this.currentOrder[i].itemName,
          itemDescription:this.currentOrder[i].itemDescription,
          itemCategory:this.currentOrder[i].itemCategory,
          itemImageName:this.currentOrder[i].itemImageName,
          itemPrice:this.currentOrder[i].itemPrice,
          itemQuantity:this.currentOrder[i].itemQuantity,
          itemTotalCost:this.currentOrder[i].itemQuantity*this.currentOrder[i].itemPrice
        }
        this.totalSum+=obj.itemTotalCost;
        this.cardArr.push(obj);
      }
      
    },
    (err)=>{
      console.log(err);
    });
  }

  paymentEventHandler()
  {
    var order={
      userName:this.currentUsername,
      orderList:this.cardArr,
      totalPay:this.totalSum,
      name:this.paymentForm.value.name,
      email:this.paymentForm.value.email,
      address:this.paymentForm.value.address,
      city:this.paymentForm.value.city,
      state:this.paymentForm.value.state,
      zip:this.paymentForm.value.zip,
      nameOnCard:this.paymentForm.value.nameOnCard,
      creditCardNumber:this.paymentForm.value.creditCardNumber,
      expiryMonth:this.paymentForm.value.expiryMonth,
      expiryYear:this.paymentForm.value.expiryYear,
      cvv:this.paymentForm.value.cvv
    }
    this.talkWithDbService.insertPayment(order).subscribe((data)=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    });
    this.router.navigateByUrl("/home");

  }

}
