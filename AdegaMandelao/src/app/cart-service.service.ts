import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
import { CartItem } from './cart-item-model';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItems:CartItem[] = []

  private productUpdated = new Subject<CartItem[]>();

  
  getProductUpdateListener(){
    return this.productUpdated.asObservable();
  }

  getCartLocalStorage(){
    let c = JSON.parse(localStorage.getItem("cart"));
    if(c){
      this.cartItems = c
    }
    else{
      this.cartItems = []
    }
  }

  isCartEmpty(){
    if(this.cartItems.length < 1){
      return true
    }
    else{
      return false
    } 
  }

  getProducts(){
    return [...this.cartItems];
  }

  cleanCart(){
    localStorage.clear()
  }

  eraseCartItem(cartItem: CartItem){
    this.cartItems = this.cartItems.filter(elem=>{
      return elem.produto._id != cartItem.produto._id;
    })
    this.productUpdated.next([...this.cartItems]);
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  postProduct(produto: Produto, unidade: number){
    let cartItem:CartItem = {produto, unidade};
    let found = this.cartItems.findIndex(elem=>elem.produto._id==produto._id);
    
    if(found != -1){
      this.cartItems[found].unidade += unidade;
    }
    else{
      this.cartItems.push(cartItem);
    }
    this.productUpdated.next([...this.cartItems]);
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }

  constructor() {
    this.getCartLocalStorage();
    console.log(this.cartItems);
   }
}
