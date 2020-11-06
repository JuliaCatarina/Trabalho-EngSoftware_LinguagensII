import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { CartItem } from './cart-item-model';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItems:CartItem[] = [
    {
      produto:{
        _id : "1",
        preco : 5,
        nome : "a",
        foto :  "foto",
        descricao : "descricao",
        quantidade : 3,
        vendido : 4,
        categoria : "Cerveja",
    },
    unidade: 2
    },
    {
      produto:{
        _id : "2",
      preco : 10,
      nome : "b",
      foto :  "foto",
      descricao : "descricao",
      quantidade : 5,
      vendido : 7,
      categoria : "Cerveja",
    },
    unidade: 1
    },
    {
    produto:{
      _id : "3",
      preco : 15,
      nome : "c",
      foto :  "foto",
      descricao : "descricao",
      quantidade : 0,
      vendido : 9,
      categoria : "Cerveja",

    },
    unidade: 1
    }, 
  ]

  private productUpdated = new Subject<any[]>();

  
  getProductUpdateListener(){
    return this.productUpdated.asObservable();
  }

  getProduct(){
    return [...this.cartItems]
  }

  cleanCart(){
    return null
  }

  postProduct(cardItem: CartItem){
    this.cartItems.push(cardItem);
    this.productUpdated.next([...this.cartItems])
  }

  constructor() { }
}
