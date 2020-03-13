import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartlist:Cart[];
  item:Items;
    constructor(private route:Router,private service:UserService) {
      if(Number(localStorage.getItem('Bid'))){
        let bid=Number(localStorage.getItem('Bid'));
      this.service.GetCartItems(bid).subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      })
    }
    else
    {
      console.log("Please Login With Credentials...");
    }
     }
    ngOnInit() {
    }
  BuyNow(item:Items){
        console.log(item);
        this.item=item;
        localStorage.setItem('item',JSON.stringify(this.item));
        this.route.navigateByUrl('/buyer-home/buy-product');
  }
  Remove(cartid:number)
  {
    console.log(cartid);
    let id=cartid;
    this.service.RemoveCartItem(id).subscribe(res=>{
      console.log('Item Removed from Cart');
      alert('Item Removed from Cart');
    })
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
  }
  