import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerHomeComponent } from './Seller/seller-home/seller-home.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistory } from './Models/purchase-history';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { BlockOrUnblockBuyerComponent } from './Admin/block-or-unblock-buyer/block-or-unblock-buyer.component';
import { BlockOrUnblockSellerComponent } from './Admin/block-or-unblock-seller/block-or-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { HomeComponent } from './Account/home/home.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { ViewSellerprofileComponent } from './Seller/view-sellerprofile/view-sellerprofile.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register-buyer',component:RegisterBuyerComponent},
  {path:'register-seller',component:RegisterSellerComponent}
,
  {path:'seller-home',component:SellerHomeComponent,
    children:
    [{path:'add-items',component:AddItemsComponent},
    {path:'view-items',component:ViewItemsComponent},
    {path:'view-reports',component:ViewReportsComponent},
    {path:'view-sellerprofile',component:ViewSellerprofileComponent}]
  },
  {path:'buyer-home',component:BuyerHomeComponent,
  children:
  [
    {path:'search',component:SearchComponent},
  {path:'buy-product',component:BuyProductComponent},
  {path:'view-cart',component:ViewCartComponent},
  {path:'purchase-history',component:PurchaseHistoryComponent},
  {path:'view-profile',component:ViewProfileComponent}]
},

  {path:'admin-home',component:AdminHomeComponent,
  children:
    [{path:'add-category',component:AddCategoryComponent},
    {path:'add-subCategory',component:AddSubCategoryComponent},
    {path:'block-or-unblock-buyer',component:BlockOrUnblockBuyerComponent},
    {path:'block-or-unblock-seller',component:BlockOrUnblockSellerComponent},
    {path:'daily-reports',component:DailyReportsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
