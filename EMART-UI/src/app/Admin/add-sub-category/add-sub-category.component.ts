import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { SubCategory } from 'src/app/Models/sub-category';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  list:Category[]=[];
  subcategory:SubCategory;
  SubCategoryForm:FormGroup;
  submitted=false;
  list1:SubCategory[]=[];


  constructor(private formBuilder:FormBuilder ,private service:UserService,private route:Router) {
    this.service.GetCategories().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
    this.SubCategoryForm=this.formBuilder.group({
      categoryid:['',[Validators.required]],
      // subcategoryid:['',[Validators.required]],
      subcategoryname:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,10}$')]],
      subcategorybrief:['',Validators.required],
      // categoryname:['',Validators.required],
      gst:['',[Validators.required]]
    })
  }
  onSubmitAddSubCategory()
  {
    this.submitted=true;
    if(this.SubCategoryForm.invalid){
      return;
     }
       else{
         this.subcategory=new SubCategory();
        console.log(this.SubCategoryForm.value);
        this.subcategory.categoryid=Number(this.SubCategoryForm.value["categoryid"]);
        this.subcategory.subcategoryid=Math.floor(Math.random()*1000);
      //  this.subcategory.subcategoryid=this.SubCategoryForm.value["subcategoryid"];
       this.subcategory.subcategoryname=this.SubCategoryForm.value["subcategoryname"];
       this.subcategory.subcategorybrief=this.SubCategoryForm.value["subcategorybrief"];
       this.subcategory.gst=Number(this.SubCategoryForm.value["gst"]);
      this.list1.push(this.subcategory);
       console.log(this.subcategory);
       this.service.AddSubCategory(this.subcategory).subscribe(
        res=>{
          alert("Added Successfully");
          this.route.navigateByUrl('admin-home');},
        err=>
        {
          console.log(err)
        }
      )
      
       }
     }
     Delete(subcategoryid:number){
      // let subcategoryid=Number(this.SubCategoryForm.value["subcategoryid"]);
      this.service.DeleteCategory(subcategoryid).subscribe(res=>{
        console.log('Record deleted');
        alert("Record Deleted");
        this.route.navigateByUrl('ADMIN')
      },
      err=>{
        console.log(err);
      })
    }
     get f(){return this.SubCategoryForm.controls;}
    onReset()
  {
    this.submitted=false;
    this.SubCategoryForm.reset();
  }
  GetSubCategories()
  {
    this.service.GetSubCategories().subscribe(res=>{
      this.list1=res;
      console.log(this.list1);
    },err=>{
      console.log(err)
    })
  }
 
}