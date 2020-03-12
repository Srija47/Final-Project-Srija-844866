import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/Models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted:boolean=false;
  contactForm:FormGroup;
  contact:Contact;
  obj:Contact[]=[];
  constructor(private builder:FormBuilder) { }
  ngOnInit() {

    this.contactForm = this.builder.group({
      fname: ['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],  
      lname:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],
      email: ['',[Validators.required,Validators.email]],
      comment: ['',[Validators.required]]

    });
  }
  
 get f()
  {
   return this.contactForm.controls;
  }
  onSubmit()
  {
    this.submitted=true;
//    display from values on sucess
    if(this.contactForm.valid)
    {
      this.Add();
      console.log(JSON.stringify(this.contactForm.value));
    }
  }
    Add()
    {
      this.contact=new Contact();
       this.contact.fname=this.contactForm.value["FName"];
       this.contact.lname=this.contactForm.value["LName"];
       this.contact.email=this.contactForm.value["email"];
       this.contact.comment=this.contactForm.value["comment"];
       this.obj.push(this.contact);
      console.log(this.contact);
      alert("We Will You reach You soon....");
 }
}