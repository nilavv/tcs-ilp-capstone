import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
myBaseServerUrl=environment.serverUrl;
  constructor(public httpClient:HttpClient) { }
  getAllItems()
  {
    var myServerUrl=this.myBaseServerUrl+"api/home";
    //console.log(myServerUrl);
    return this.httpClient.get(myServerUrl);
  }
  doUserValidation(obj){
    var myServerUrl=this.myBaseServerUrl+"api/login";
    return this.httpClient.post(myServerUrl,obj);
  }
  getAllUsers()
  {
    var myServerUrl=this.myBaseServerUrl+"api/user/currentusers";
    console.log(myServerUrl);
    return this.httpClient.get(myServerUrl);
  }
  updateUser(obj)
  {
    var myServerUrl=this.myBaseServerUrl+"api/user/loginUpdate";
    //console.log(myServerUrl,obj);
    return this.httpClient.post(myServerUrl,obj);
  }

  deleteById(id)
  {
    var myServerUrl=this.myBaseServerUrl+"api/admin/deleteItem";
    return this.httpClient.post(myServerUrl,id)
  }

  updateItem(obj){
    var myServerUrl=this.myBaseServerUrl+"api/admin/updateItem";
    return this.httpClient.post(myServerUrl,obj);
  }

  addItem(obj){
    var myServerUrl=this.myBaseServerUrl+"api/admin/addItem";
    return this.httpClient.post(myServerUrl,obj);
  }

  countAllOrders()
  {
    var myServerUrl=this.myBaseServerUrl+"api/order/getAllOrders";
    //console.log(myServerUrl);
    return this.httpClient.get(myServerUrl);
  }

  addOrder(obj)
  {
    var myServerUrl=this.myBaseServerUrl+"api/order/addOrder";
    //console.log(myServerUrl,obj);
    return this.httpClient.post(myServerUrl,obj);
  }
  registerUser(obj)
  {
    var myServerUrl=this.myBaseServerUrl+"api/signup";
    console.log(myServerUrl,obj);
    return this.httpClient.post(myServerUrl,obj);
  }

  
  insertPayment(obj)
  {
    var myServerUrl=this.myBaseServerUrl+"api/payment/addnewpayment";
    //console.log(myServerUrl,obj);
    return this.httpClient.post(myServerUrl,obj);
  }

}
