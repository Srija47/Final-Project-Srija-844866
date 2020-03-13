import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { Items } from 'src/app/Models/items';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  list:PurchaseHistory[]=[];
  purchasehistory:PurchaseHistory;
  item:Items;
  list1:Items[]=[];
  constructor(private formbuilder:FormBuilder,private service:UserService,private route:Router) { 
    // let id=Number(localStorage.getItem('Bid'))
    // this.item=JSON.parse(localStorage.getItem('item'));
    // this.list1.push(this.item);
    // console.log(this.item);
    //console.log(this.item.id);
    this.service.GetPurchaseHistory().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}

