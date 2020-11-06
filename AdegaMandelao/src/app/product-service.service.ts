import { Injectable } from '@angular/core';
import { Produto } from 'src/app/produto.model';

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
  ]

  getProduct(){
    return [...this.products]
  }

  constructor() { }
}
