import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { Token } from 'src/app/Models/token';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  list:Buyer[]=[];
  buyer:Buyer;
  BuyerprofileForm:FormGroup;
  submitted=false;
  id:number;
  token:Token;
  constructor(private formBuilder:FormBuilder ,private service:UserService,private route:Router) { 
   this.id=Number(localStorage.getItem('Bid'))
  }

  ngOnInit() {
     this.BuyerprofileForm=this.formBuilder.group({
        bid:[''],
        username:[''],
        password:[''],
        emailid:[''],
        mobileno:[''],
        datetime:['']
    })
    this.GetProfileBuyer();
  }
  GetProfileBuyer()
  {
    this.service.GetProfileBuyer(this.id).subscribe(res=>  
      {
        this.buyer=res;
        console.log(this.buyer);
        this.BuyerprofileForm.patchValue({
          bid:Number(this.buyer.bid),
          username:this.buyer.username,
          emailid:this.buyer.emailid,
          password:this.buyer.password,
          mobileno:this.buyer.mobileno,
          datetime:this.buyer.datetime
        })
       })
}
get f(){return this. BuyerprofileForm.controls;}
Edit()
  {
    this.buyer=new Buyer();
    this.buyer.bid=Number(this.BuyerprofileForm.value["bid"]),
    this.buyer.username=this.BuyerprofileForm.value["username"],
    this.buyer.emailid=this.BuyerprofileForm.value["emailid"],
    this.buyer.password=this.BuyerprofileForm.value["password"],
    this.buyer.mobileno=this.BuyerprofileForm.value["mobileno"],
    this.buyer.datetime=this.BuyerprofileForm["datetime"]
    this.service.EditProfileBuyer(this.buyer).subscribe(res=>{console.log(this.buyer),alert("updated succesfully"),this.GetProfileBuyer()},err=>{
      console.log(err)
    })
  }
}