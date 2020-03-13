import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {
bid:number;
  constructor(private route:Router) { 
    if(localStorage.getItem('Bid')==null)
    {
      this.route.navigateByUrl('home')
    }
    this.bid=JSON.parse(localStorage.getItem('Bid'))
  }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
