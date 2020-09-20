import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private products = []

  private productUpdated = new Subject<any[]>();

  

  getProductUpdateListener(){
    return this.productUpdated.asObservable();
  }

  getProduct(){
    return [...this.products]
  }
  

  postProduct(produto: Produto){
    this.products.push(produto);
    this.productUpdated.next([...this.products])
  }

  constructor() { }
}
