import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable } from 'Rxjs';
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
import { Items } from '../Models/items';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string='http://localhost:54151/Account/'
  constructor(private http:HttpClient) { }
  public BuyerLogin(uname:string,pwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'buyerlogin/'+uname+','+pwd,Requestheaders)
  }
  public SellerLogin(uname:string,pwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'sellerlogin/'+uname+','+pwd,Requestheaders)
  }
  public BuyerRegister(buyer:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'register-buyer',buyer);
  }
  public SellerRegister(seller:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'register-seller',seller);
  }

  // Adminservice add/delete category functionality

url1:string='http://localhost:54151/Admin/'

public AddCategory(category:Category):Observable<any>
{
  return this.http.post<any>(this.url1+'AddCategory',category);
}
public AddSubCategory(subcategory:SubCategory):Observable<any>
{
  return this.http.post<any>(this.url1+'AddSubCategory',subcategory);
}
public DeleteCategory(categoryid:number):Observable<any>
{
  return this.http.delete<any>(this.url1+'DeleteCategory/'+categoryid,Requestheaders);
}
public DeleteSubCategory(subcategoryid:number):Observable<any>
{

  return this.http.delete<any>(this.url1+'DeleteSubCategory/'+subcategoryid,Requestheaders);
}
public GetCategories():Observable<Category[]>
{
   return this.http.get<Category[]>(this.url1+'GetCategories',Requestheaders)
}
public GetSubCategories():Observable<SubCategory[]>
{
   return this.http.get<SubCategory[]>(this.url1+'GetSubCategories',Requestheaders)
}
// Seller service Functionality

url2:string='http://localhost:54151/Item/'
public AddItem(item:Items):Observable<any>
{
  return this.http.post<any>(this.url2+'AddItem',JSON.stringify(item),Requestheaders);
}
public DeleteItem(id:number):Observable<any>
{
  return this.http.delete<any>(this.url2+'DeleteItem/'+id,Requestheaders);
}
public GetItem(id:number):Observable<any>
{
  return this.http.get<any>(this.url2+'GetItem/'+id,Requestheaders);
}
public UpdateItem(item:Items):Observable<any>
{
  return this.http.put<any>(this.url2+'UpdateItem',item);
}
public ViewItems(id:number):Observable<Items[]>
{
     return this.http.get<Items[]>(this.url2+'ViewItems/'+id);
}
public GetAllCategories():Observable<Category[]>
{
   return this.http.get<Category[]>(this.url2+'ViewCategory',Requestheaders)
}
public GetAllSubCategories(categoryid:number):Observable<SubCategory[]>
{
   return this.http.get<SubCategory[]>(this.url2+'ViewSubCategory/'+categoryid,Requestheaders)
}
url3:string="http://localhost:54151/Seller/"
public GetProfileSeller(sid:number):Observable<any>
{
  return this.http.get<any>(this.url3+'GetProfile/'+sid,Requestheaders);
}
public EditProfileSeller(seller:Seller):Observable<any>
  {
      return this.http.put<any>(this.url3+'EditProfile',seller);
  }
  url4:string="http://localhost:54151/Buyer/"
public SearchItems(itemname:string):Observable<any>
  {
    return this.http.get<any>(this.url4+'SearchItems/'+itemname,Requestheaders)
  }
  public GetProfileBuyer(bid:number):Observable<any>
  {
  return this.http.get<any>(this.url4+'GetProfile/'+bid,Requestheaders);
  }
  public EditProfileBuyer(buyer:Buyer):Observable<any>
  {
      return this.http.put<any>(this.url4+'EditProfile',buyer,Requestheaders);
  }
  public GetAllItems():Observable<any>
  {
    return this.http.get<any>(this.url4+'GetAllItems',Requestheaders);
  }
  public BuyItem(purchasehistory:PurchaseHistory):Observable<any>
  {
  return this.http.post<any>(this.url4+'BuyItem',JSON.stringify(purchasehistory),Requestheaders);
  }
  public AddtoCart(cart:Cart):Observable<any>
  {
    return this.http.post<any>(this.url4+'AddtoCart',cart,Requestheaders);
  }
  public GetCartItems():Observable<any>
  {
    return this.http.get<any>(this.url4+'GetCartItems',Requestheaders);
  }
  public RemoveCartItem(itemid:number):Observable<any>
  {
    return this.http.delete<any>(this.url4+'DeleteCartItem/'+itemid,Requestheaders);
  }
  public GetPurchaseHistory():Observable<any>
  {
    return this.http.get<any>(this.url4+'GetPurchaseHistory',Requestheaders);
  }
}
