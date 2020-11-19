import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { DbServiceService } from '../db-service.service';
import{OrderList} from '../models/order-list';
import{Item} from '../models/item';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm= new FormGroup({
    userName:new FormControl("",Validators.required),
    password:new FormControl("",[Validators.required,Validators.minLength(8)])
  })
  uservalidationFailedmessage:string;
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

  constructor(public router:Router,public dbService:DbServiceService) 
  {  this.currentCartCount=0;
    this.loggedin=false;
  
  this.dbService.getAllUsers().subscribe((data)=>{
    this.allUsers=data as string[];
    console.log("user count",this.allUsers[0]['userName']);
    this.currentUsername=this.allUsers[0]['userName'];
    if(this.currentUsername=="Guest")
    {
      //console.log("Before login");
      //this.currentUsername="Guest";
      this.loggedin=false;
    }

    else
    {
      //console.log("After login");
      //this.currentUsername=this.allUsers[1];
      this.loggedin=true;
    }

  })}

  ngOnInit(): void {
    
  }

  loginEventHandler(){
    console.log()
    var user={
      userName:this.loginForm.value.userName,
      password:this.loginForm.value.password
    }
    console.log(user);
    this.dbService.doUserValidation(user).subscribe((data)=>{
      console.log(data);
      var tempObj:any=data["message"];
      var isAdmin:any=data['isAdmin'];
      if(tempObj == true)
      {
        if(isAdmin==true){
          console.log("He is the admin");
          
          var user={userName:this.loginForm.value.userName};
          this.dbService.updateUser(user).subscribe((data)=>{
            console.log(data);
          },
          (err)=>{
            console.log(err);
          });
          this.router.navigateByUrl("/admin",{ state: { id:1 , name:'valid' } });
        }
        else{ var user={userName:this.loginForm.value.userName};
        this.dbService.updateUser(user).subscribe((data)=>{
          console.log(data);
        },
        (err)=>{
          console.log(err);
        });
        this.router.navigateByUrl("/home/"+user.userName);}
       
      }
      else
      {
        this.uservalidationFailedmessage="Please enter correct username and password";
      }
    },
    (err)=>{
      console.log(err);
    });
    
  }
  }


