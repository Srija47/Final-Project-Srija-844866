import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { BlockOrUnblockBuyerComponent } from './Admin/block-or-unblock-buyer/block-or-unblock-buyer.component';
import { BlockOrUnblockSellerComponent } from './Admin/block-or-unblock-seller/block-or-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { SellerHomeComponent } from './Seller/seller-home/seller-home.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { HomeComponent } from './Account/home/home.component';
import {UserService } from './Services/user.service';
import { ViewSellerprofileComponent } from './Seller/view-sellerprofile/view-sellerprofile.component';
import { ContactComponent } from './Account/contact/contact.component';
import { AboutComponent } from './Account/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductComponent,
    ViewProfileComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    BlockOrUnblockBuyerComponent,
    BlockOrUnblockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    AdminHomeComponent,
    SellerHomeComponent,
    BuyerHomeComponent,
    HomeComponent,
    ViewSellerprofileComponent,
    ContactComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
