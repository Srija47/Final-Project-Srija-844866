import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { Buyer } from 'src/app/Models/buyer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  RegisterForm:FormGroup;
  list1:Items[]=[];
  item:Items;
  cart:Cart;
  buyer:Buyer;
  list:PurchaseHistory[]=[];
  purchasehistory:PurchaseHistory;
  constructor(private service:UserService,private formBuilder:FormBuilder,private route:Router) { 
    this.item=JSON.parse(localStorage.getItem('item'));
    //this.list1.push(this.item);
    console.log(this.item);
    console.log(this.item.id);
  }
 
  ngOnInit() {
    this.RegisterForm=this.formBuilder.group({
      transactiontype:[''],
      cardnumber:[''],
      cvv:[''],
      ed:[''],
      name:[''],
      datetime:[''],
      noofitems:[''],
      remarks:['']
    })
  }
  onSubmit()
  {
     this.purchasehistory=new PurchaseHistory();
     this.purchasehistory.id=Math.round(Math.random()*1000);
     this.purchasehistory.bid=Number(localStorage.getItem('Bid'));
     this.purchasehistory.sid=this.item.sid;
     this.purchasehistory.noofitems=Number(this.RegisterForm.value["noofitems"]);
     this.purchasehistory.itemid=this.item.id;
     this.purchasehistory.transactiontype=this.RegisterForm.value["transactiontype"]
     this.purchasehistory.datetime=this.RegisterForm.value["datetime"];
     this.purchasehistory.remarks=this.RegisterForm.value["remarks"];
   // this.list.push(this.purchasehistory);
     console.log(this.purchasehistory);
     this.service.BuyItem(this.purchasehistory).subscribe(res=>{
       console.log("Purchase was Sucessfull");
       alert('Purchase Done Successfully');
     })
    }
    Delete(){
      console.log(this.item.id);
      let id=this.item.id
      this.service.RemoveCartItem(id).subscribe(res=>{
        console.log('Cart item Removed');
      })
    }
Logout(){
  //localStorage.clear();
  this.route.navigateByUrl('/login');
}
get f() { return this.RegisterForm.controls; }
}
