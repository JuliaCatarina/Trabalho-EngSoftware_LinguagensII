import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
import { CartItem } from './cart-item-model';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItems:CartItem[] = []

  private productUpdated = new Subject<any[]>();

  
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

  getProducts(){
    return [...this.cartItems];
  }

  cleanCart(){
    localStorage.clear()
  }

  postProduct(produto: Produto, unidade: number){
    let cartItem:CartItem = {produto, unidade};
    let found = this.cartItems.findIndex(elem=>elem.produto._id==produto._id);
    
    if(found != -1){
      this.cartItems[found].unidade += unidade;
      //localStorage.setItem("cart", c);
    }
    else{
      this.cartItems.push(cartItem);
      //localStorage.setItem("cart", JSON.stringify(this.cartItems[found]));
    }
    this.productUpdated.next([...this.cartItems]);
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
    
  }

  constructor() {
    this.getCartLocalStorage();
    console.log(this.cartItems);
   }
}
