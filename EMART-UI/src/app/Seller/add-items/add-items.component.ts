import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  list:Items[]=[];
  item:Items;
  categorylist:Category[]=[];
  category:Category;
  subcategorylist:SubCategory[]=[];
  subcategory:SubCategory;
  AddItemsForm:FormGroup;
  submitted=false;
  name:string;
  img:string;
  selectedFile:File=null;

  constructor(private formBuilder:FormBuilder ,private service:UserService,private route:Router) {
    this.service.GetAllCategories().subscribe(res=>{
      this.categorylist=res;
      // console.log(this.categorylist);
    },err=>{
      console.log(err)
    })
    this.ViewItems();
   }

  ngOnInit() {
    this.AddItemsForm=this.formBuilder.group({
      // id:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      categoryid:['',[Validators.required]],
      subcategoryid:['',[Validators.required]],
      price:['',[Validators.required]],
      itemname:['',[Validators.required,Validators.pattern('^[A-Za-z][0-9]{1,20}$')]],
      description:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,20}$')]],
      stocknumber:['',[Validators.required]],
      remarks:['',[Validators.required]],
      // sid:['',[Validators.required]],
      imagename:['']
    })
  }
  AddItem()
  {
    this.submitted=true;
    if(this.AddItemsForm.invalid){
alert("validations failed")
      // return;
     }
       else{
        this.item=new Items();
        console.log(this.AddItemsForm.value);
       this.item.id=Math.floor(Math.random()*1000);
       this.item.categoryid=Number(this.AddItemsForm.value["categoryid"]);
       this.item.subcategoryid=Number(this.AddItemsForm.value["subcategoryid"]);
       this.item.price=this.AddItemsForm.value["price"];
       this.item.itemname=this.AddItemsForm.value["itemname"];
       this.item.description=this.AddItemsForm.value["description"];
       this.item.stocknumber=Number(this.AddItemsForm.value["stocknumber"]);
       this.item.remarks=this.AddItemsForm.value["remarks"];
      this.item.sid=Number(localStorage.getItem('Sid'));
       this.item.imagename=this.img;
       //this.list.push(this.item);
       console.log(this.item);
       this.service.AddItem(this.item).subscribe(
        res=>{
          alert("Added Successfully");
          this.route.navigateByUrl('seller-home');},
        err=>
        {
          console.log(err)
        }
      )
      
       }
     }
     get f(){return this.AddItemsForm.controls;}
     onReset()
   {
     this.submitted=false;
     this.AddItemsForm.reset();
   }
     Delete(id:number){
      // let id=Number(this.AddItemsForm.value["id"]);
      this.service.DeleteCategory(id).subscribe(res=>{
        console.log('Record deleted');
        alert("Record Deleted");
        this.route.navigateByUrl('seller-home');
      },
      err=>{
        console.log(err);
      })
    }
     
    GetAllSubCategories()
  {
    let categoryid=this.AddItemsForm.value["categoryid"]
    this.service.GetAllSubCategories(categoryid).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    },err=>{
      console.log(err)
    })
    }
  ViewItems(){
  let id=Number(localStorage.getItem('id'))
    this.service.ViewItems(id).subscribe(res=>{
      this.list=res;
      // console.log(this.list);
    },err=>{
      console.log(err)
    })
  }
  
  fileEvent(event){
    this.img = event.target.files[0].name;
}
}
