import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  list:Items[];
  item:Items;
  seller:Seller
  constructor(private builder:FormBuilder,private service:UserService,private route:Router) {
    let id=Number(localStorage.getItem('Sid'))
    this.service.ViewItems(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }
   ngOnInit() {
    this.itemForm=this.builder.group({
      sid:[''],
      id:[''],
      itemname:[''],
      price:[''],
      stocknumber:[''],
      description:['']
    });
  }
  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Update()
  {
    this.item=new Items();
    this.item.id=Number(this.itemForm.value["id"])
    this.item.categoryid=Number(this.itemForm.value["categoryid"]);
    this.item.subcategoryid=Number(this.itemForm.value["subcategoryid"]);
    this.item.price=this.itemForm.value["price"];
    this.item.itemname=this.itemForm.value["itemname"];
    this.item.description=this.itemForm.value["description"];
    this.item.stocknumber=Number(this.itemForm.value["stocknumber"]);
    this.item.remarks=this.itemForm.value["remarks"];
    this.item.sid=Number(this.itemForm.value["sid"]);
    this.item.imagename=this.itemForm.value["imagename"]
    // console.log(this.item);
    // console.log(this.item.id);
    this.service.UpdateItem(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully")},err=>{
      console.log(err)
    })
}
Edit(id:number)
{
  console.log(id);
  this.service.GetItem(id).subscribe(res=>{
   this.item=res;
     console.log(this.item);
    this.itemForm.patchValue({
      id:Number(this.item.id),
      categoryid:Number(this.item.categoryid),
      subcategoryid:Number(this.item.subcategoryid),
      itemname:this.item.itemname,
      price:this.item.price,
      description:this.item.description,
      stocknumber:this.item.stocknumber,
      remarks:this.item.remarks,
      sid:Number(this.item.sid),
      imagename:this.item.imagename
    })
  })
  
}
  Delete(id:number){
    this.service.DeleteItem(id).subscribe(res=>{
      console.log('Record deleted');
    },
    err=>{
      console.log(err);
    })
  }

  
}