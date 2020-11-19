import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbServiceService } from '../db-service.service';
import{Item} from "../models/item";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
isValid:boolean;
selectedFile:File;
updateItem= new FormGroup({itemId:new FormControl() ,itemName:new FormControl(),itemCategory:new FormControl(),itemDescription:new FormControl(),itemPrice:new FormControl()})
addingItem= new FormGroup({itemId:new FormControl() ,itemName:new FormControl(),itemCategory:new FormControl(),itemDescription:new FormControl(),itemPrice:new FormControl(),itemImageName:new FormControl()})

  constructor(public activatedRoute:ActivatedRoute,public router:Router,public dbService:DbServiceService) { }
  temp:Item[]=new Array();
  ngOnInit(): void {

    if(history.state.name=='valid'){

    
    this.isValid=true;
    this.dbService.getAllItems().subscribe((data)=>{
      this.temp=data as Item[];
      
    },(err)=>{
      console.log(err);
    });
  
  }

    else{
      this.isValid=false;
    }

    
  }
  deleteProduct(id){
    this.isValid=true;
    this.dbService.deleteById({itemId:id}).subscribe((data)=>{
      console.log(data);
    })
    
  }
  updateProduct(){
    console.log(this.updateItem.value);
    this.dbService.updateItem(this.updateItem.value).subscribe((data)=>{});
  }

  addProduct(){
    console.log(this.addingItem.value);
    this.dbService.addItem(this.addingItem.value).subscribe((data)=>{});
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }


}


