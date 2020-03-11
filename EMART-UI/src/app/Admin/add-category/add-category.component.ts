import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
   list:Category[]=[];
  category:Category;
  CategoryForm:FormGroup;
  submitted=false;
  // List:any=['Electronics','Fashion','Home Appliances']

  constructor(private formBuilder:FormBuilder ,private service:UserService,private route:Router) {}

  ngOnInit() {
    this.CategoryForm=this.formBuilder.group({
      //categoryid:['',[Validators.required,Validators.pattern('^[0-9]{3}$')]],
      categoryname:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,20}$')]],
      categorybrief:['',Validators.required],
    })
  }
  onSubmitAddCategory()
  {
    this.submitted=true;
    if(this.CategoryForm.invalid){
      return;
     }
       else{
         this.category=new Category();
        console.log(this.CategoryForm.value);
       this.category.categoryid=Math.floor(Math.random()*1000);
      //  this.category.categoryid=this.CategoryForm.value["categoryid"];
       this.category.categoryname=this.CategoryForm.value["categoryname"];
       this.category.categorybrief=this.CategoryForm.value["categorybrief"];
      this.list.push(this.category);
       console.log(this.category);
       this.service.AddCategory(this.category).subscribe(
        res=>{
          //this.buyer=res;
          alert("Added Successfully");
          this.route.navigateByUrl('admin-home');},
        err=>
        {
          console.log(err)
        }
      )
      
       }
     }
     Delete(categoryid:number){
      // let categoryid=Number(this.CategoryForm.value["categoryid"]);
      this.service.DeleteCategory(categoryid).subscribe(res=>{
        console.log('Record deleted');
        alert("Record Deleted");
        this.route.navigateByUrl('admin-home');
      },
      err=>{
        console.log(err);
      })
    }
     get f(){return this.CategoryForm.controls;}
    onReset()
  {
    this.submitted=false;
    this.CategoryForm.reset();
  }
  GetCategories()
  {
    this.service.GetCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }
   
}