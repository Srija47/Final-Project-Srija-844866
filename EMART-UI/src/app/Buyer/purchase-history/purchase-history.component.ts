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
    if(Number(localStorage.getItem('Bid'))){
      let bid=Number(localStorage.getItem('Bid'));
    this.service.PurchaseHistory(bid).subscribe(res=>{
      this.list=res;
      console.log(this.list);
      for(let i=0;i<this.list.length;i++)
        {
        this.service.GetItem(this.list[i].itemid).subscribe(res1=>{
        console.log(this.list[i].itemid);
          this.list1.push(res1);
          console.log(this.list1);
          
        })
        }
    },err=>{
      console.log(err)
    })
  }
  else{
    alert("Please Login With Your Credentials..")
  }
  }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}

