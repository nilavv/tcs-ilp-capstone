import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { OrderList } from '../models/order-list';
import { Item } from '../models/item';
import { DbServiceService } from '../db-service.service';

@Component({
  selector: 'app-men-items',
  templateUrl: './men-items.component.html',
  styleUrls: ['./men-items.component.css']
})
export class MenItemsComponent implements OnInit {
  currentOrder:OrderList[]=new Array();
  cardArr:Item[]= new Array();
  temp:Item[]=new Array();
  currentItemCount:number;
  currentCartCount:number;
  currentUsername:string;
  currentCategory:string;
  loggedin:boolean;
  userCount:number;
  allUsers:any[]=new Array();
  addItemForm= new FormGroup({
    itemId:new FormControl(),
    itemQuantity:new FormControl("",Validators.required)
  }

  )
  constructor(public activatedRoute:ActivatedRoute,public router:Router, public talkWithDbService:DbServiceService) {
    this.currentCartCount=0;
    this.currentItemCount=0;
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
   }

  ngOnInit(): void {
    this.talkWithDbService.getAllItems().subscribe((data)=>{
      //console.log("Get all items",data);
      this.temp=data as Item[];
      for(let i=0;i<this.temp.length;i++)
      {
        if(this.temp[i]['itemCategory']=="men")
        {
          this.cardArr.push(this.temp[i]);
        }
      }
    },
    (err)=>{
      console.log(err);
    });
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

  addToCartEventHandler(temp)
  {
    this.currentCartCount+=this.currentItemCount;
    var item={
      itemId:temp.itemId,
      itemName:temp.itemName,
      itemCategory:temp.itemCategory,
      itemDescription:temp.itemDescription,
      itemPrice:temp.itemPrice,
      itemImageName:temp.itemImageName,
      itemQuantity:this.currentItemCount
    };
    this.talkWithDbService.addOrder(item).subscribe((data)=>{
      console.log("Add items",data);
      //this.cardArr=data as Item[];
    },
    (err)=>{
      console.log(err);
    })
    //this.currentItemCount=document.getElementById("sel1");
    console.log("After add to cart",item);
    this.addItemForm.reset(false);
    
  }

  selectFormValue(event:any)
  {
    this.currentItemCount=parseInt(event.target.value);
    //console.log("After add to cart",this.currentItemCount);
  }

}
