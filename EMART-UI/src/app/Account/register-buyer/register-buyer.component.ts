import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators }from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  list:Buyer[]=[];
  buyer:Buyer;
  BuyerregisterForm:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder ,private service:UserService,private route:Router) { }

  ngOnInit() {
    this.BuyerregisterForm=this.formBuilder.group({
      // bid:['',[Validators.required,Validators.pattern('^[0-9]{5}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],
      password:['',[Validators.required,Validators.minLength(8)]],
      emailid:['',[Validators.required,Validators.email]],
      mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      datetime:['',Validators.required],
    })
  }
  onSubmitBuyer()
  {
    this.submitted=true;
    if(this.BuyerregisterForm.invalid){
      return;
     }
       else{
         this.buyer=new Buyer();
        console.log(this.BuyerregisterForm.value);
       this.buyer.bid=Math.floor(Math.random()*1000);
       this.buyer.username=this.BuyerregisterForm.value["username"];
       this.buyer.password=this.BuyerregisterForm.value["password"];
       this.buyer.mobileno=this.BuyerregisterForm.value["mobileno"];
       this.buyer.emailid=this.BuyerregisterForm.value["emailid"];
       this.buyer.datetime=this.BuyerregisterForm.value["datetime"];
       //this.list.push(this.buyer);
       alert("Registration Successful")
       console.log(this.buyer);
       this.service.BuyerRegister(this.buyer).subscribe(
        res=>{
          this.buyer=res;
          this.route.navigateByUrl('login');},
        err=>
        {
          console.log(err)
        }
      )
      
       }
     }
     get f(){return this.BuyerregisterForm.controls;}
    onReset()
  {
    this.submitted=false;
    this.BuyerregisterForm.reset();
  }
}
