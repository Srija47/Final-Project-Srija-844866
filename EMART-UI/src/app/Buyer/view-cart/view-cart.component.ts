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
      this.service.GetCartItems().subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      })
     }
    ngOnInit() {
    }
  BuyNow(item:Items){
        console.log(item);
        this.item=item;
        localStorage.setItem('item',JSON.stringify(this.item));
        this.route.navigateByUrl('/buyer-home/buy-product');
  }
  Remove(itemid:number)
  {
    console.log(itemid);
    let id=itemid;
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
  