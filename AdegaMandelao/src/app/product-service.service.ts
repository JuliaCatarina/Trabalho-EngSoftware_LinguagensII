import { Injectable, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';
import { CartServiceService } from 'src/app/cart-service.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public products : Produto[] = [
    {
      _id : "1",
      preco : 5,
      nome : "a",
      foto :  "foto",
      descricao : "descricao",
      quantidade : 3,
      vendido : 4,
      categoria : "Cerveja"
    },
    {
      _id : "2",
      preco : 10,
      nome : "b",
      foto :  "foto",
      descricao : "descricao",
      quantidade : 5,
      vendido : 7,
      categoria : "Cerveja"
    },
    {
      _id : "3",
      preco : 15,
      nome : "c",
      foto :  "foto",
      descricao : "descricao",
      quantidade : 0,
      vendido : 9,
      categoria : "Cerveja"
    },
    {
      _id : "4",
      preco : 40,
      nome : "Vodka do Doge",
      foto :  "foto",
      descricao : "descricao",
      quantidade : 41,
      vendido : 2,
      categoria : "Vodka"
    },
  ]

  getProducts(){
    return [...this.products];
  }


  getProduct(id:string){
    let prod = this.products.find(element=>{
      return element._id === id;
    })
    if(prod){
      return of(prod);
    }
    else{
      return undefined;
    }
  }


  constructor(private cartService:CartServiceService) { }

  addProduct(produto:Produto,unidade:number){
    this.cartService.postProduct(produto,unidade);
  }

  

  
}
