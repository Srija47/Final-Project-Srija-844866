import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
sid:number;
  constructor(private route:Router) { 
    if(localStorage.getItem('Sid')==null)
    {
      this.route.navigateByUrl('home')
    }
    this.sid=JSON.parse(localStorage.getItem('Sid'))
  }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
