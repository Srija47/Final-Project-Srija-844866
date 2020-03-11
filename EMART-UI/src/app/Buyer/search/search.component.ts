import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchform:FormGroup;
list:Items[]=[];
items:Items;
item:Items;
list1:Items[]=[];
cart:Cart;
categorylist:Category[]=[];
category:string;
  constructor(private service:UserService,private router:Router,private formbuilder:FormBuilder) {
      // this.item=JSON.parse(localStorage.getItem('item'));
      // this.list1.push(this.item);
      // console.log(this.item);
      // //console.log(this.item.id);
      this.service.GetCategories().subscribe(res=>{
        this.categorylist=res;
        console.log(this.categorylist);
      })
     }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemname:['']
    })
  //  this.ViewItems();
  }

SearchItems()
{
  // this.items=new Items();

  let itemname=this.searchform.value["itemname"];
  this.service.SearchItems(itemname).subscribe(res=>{
    this.list=res;
    console.log(this.list);
 
  }
  ,err=>{
    console.log(err);
  })
}
get f() { return this.searchform.controls; }
buy(item:Items)
{
  // this.router.navigateByUrl('buyproduct');
  console.log(item);
  localStorage.setItem('item',JSON.stringify(item));
  this.router.navigateByUrl('/buyer-home/buy-product');
  
}
SearchItemByCategory(categoryid:number){
  this.service.SearchItemByCategory(categoryid).subscribe(res=>{
    this.list=res;
    console.log(this.list);
  })
}
AddtoCart(item1:Items){
  console.log(item1);
 this.cart=new Cart();
 this.cart.id=item1.id;
 this.cart.itemname=item1.itemname;
 this.cart.categoryid=item1.categoryid;
 this.cart.subcategoryid=item1.subcategoryid;
 this.cart.bid=Number(localStorage.getItem('Bid'))
 this.cart.sid=item1.sid;
 this.cart.itemid=item1.id;
 this.cart.stocknumber=item1.stocknumber;
 this.cart.price=item1.price;
 this.cart.description=item1.description;
 this.cart.remarks=item1.remarks;
 this.cart.imagename=item1.imagename
 console.log(this.cart);
 this.service.AddtoCart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   alert('Item has been Added To Cart');
 })
}
}
