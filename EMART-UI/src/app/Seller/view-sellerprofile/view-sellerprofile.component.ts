import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { Token } from 'src/app/Models/token';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-sellerprofile',
  templateUrl: './view-sellerprofile.component.html',
  styleUrls: ['./view-sellerprofile.component.css']
})
export class ViewSellerprofileComponent implements OnInit {
  list:Seller[]=[];
  sellerprofileForm:FormGroup;
  submitted=false;
  seller:Seller;
  token:Token;
  sid:number;
    constructor(private frombuilder:FormBuilder,private service:UserService,private route:Router) {
      this.sid=JSON.parse(localStorage.getItem('Sid'));
     }
  
    ngOnInit() {
      this.sellerprofileForm=this.frombuilder.group({
        sid:[''],
        username:[''],
        password:[''],
        companyname:[''],
        gst:[''],
        aboutcmpy:[''],
        address:[''],
        website:[''],
        mobileno:[''],
        email:['']
      });
      this.GetProfileSeller();
    }
    GetProfileSeller()
    {
      this.service.GetProfileSeller(this.sid).subscribe(res=>  
        {
          
          this.seller=res;
          console.log(this.seller);
          this.sellerprofileForm.patchValue({
            sid:Number(this.seller.sid),
            username:this.seller.username,
            email:this.seller.email,
            password:this.seller.password,
            aboutcmpy:this.seller.aboutcmpy,
            companyname:this.seller.companyname,
            address:this.seller.address,
            website:this.seller.website,
            gst:Number(this.seller.gst),
            mobileno:this.seller.mobileno,
            
          })
         })
    }
    
    Edit()
    {
      this.seller=new Seller();
      this.seller.sid=Number(this.sellerprofileForm.value["sid"]),
      this.seller.username=this.sellerprofileForm.value["username"],
      this.seller.email=this.sellerprofileForm.value["email"],
      this.seller.password=this.sellerprofileForm.value["password"],
      this.seller.aboutcmpy=this.sellerprofileForm.value["aboutcmpy"],
      this.seller.companyname=this.sellerprofileForm.value["companyname"],
      this.seller.address=this.sellerprofileForm.value["address"],
      this.seller.website=this.sellerprofileForm.value["website"],
      this.seller.mobileno=this.sellerprofileForm.value["mobileno"],
      this.seller.gst=Number(this.sellerprofileForm.value["gst"]),
      this.service.EditProfileSeller(this.seller).subscribe(res=>{console.log(this.seller),alert("updated succesfully"),this.GetProfileSeller()},err=>{
        console.log(err)
      })
    }
    Logout(){
      //localStorage.clear();
      this.route.navigateByUrl('HOME');
    }
}




