import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable } from 'Rxjs';
import { User } from 'src/app/Models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
import {Token} from 'src/app/Models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  submitted=false;
  userForm:FormGroup;
  buyer:Buyer;
  seller:Seller;
  flag:number=0;
  token:Token;
  role:string;
    constructor(private frombuilder:FormBuilder,private service:UserService,private route:Router) {
      
     }
  
    ngOnInit() {
      this.userForm=this.frombuilder.group({
        username:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
        password:['',[Validators.required,Validators.pattern("^[A-Za-z]{8,}[!@#$%^&*]")]],
        role:['']
      });

    }
    onSubmitLogin(){
      this.submitted=true;
      if(this.userForm.invalid){
       return;
      }
        else{
          this.user=new User();
          this.token=new Token();
          this.seller=new Seller();
          this.buyer=new Buyer();
          let username=this.userForm.value['username']
          let password=this.userForm.value['password']
        console.log(this.user)
        this.service.BuyerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
          if(this.token.message=="Success")
          {
            this.role="buyer";
          }
        });
        this.service.SellerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
          if(this.token.message=="Success")
          {
            this.role="seller";
          }
        });
        }
        console.log(this.user)
      }
        public Validate()
        {
          let username=this.userForm.value['username']
          let password=this.userForm.value['password']
          let role=this.userForm.value['role']
          if(username=="Admin"&&password=="admin456@")
          {
            localStorage.setItem('Admin','admin456@');
            alert("Welcome");
            this.route.navigateByUrl('admin-home');
          }
          
          if(role=='buyer')
          {
            let token=new Token();
            this.service.BuyerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
              if(this.token.message=="Success")
              {
                  alert("welcome");
                  console.log(this.token);
                  localStorage.setItem("token",this.token.token);
                  localStorage.setItem("Bid",this.token.buyerid.toString());
                  this.route.navigateByUrl('buyer-home');
              }
              else{
                alert("Invalid Credentials Login Failed...!");
    
              }
            });
          }
      if(role=='seller')
      {
        let token=new Token()
        this.service.SellerLogin(username,password).subscribe(res=>{this.token=res,console.log(this.token)
          if(this.token.message=='Success')
          {
            alert("welcome")
         console.log(this.token)
            localStorage.setItem("token",this.token.token);
            localStorage.setItem("Sid",this.token.sellerid.toString());
            this.route.navigateByUrl('seller-home')
          }
          else{
            alert("Invalid Credentials Login Failed...!");

          }
    });
  }
    }
      get f(){return this.userForm.controls;}
      onReset()
      {
        this.submitted=false;
        this.userForm.reset();
      }
  }