import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/cart-item-model';
import { CartServiceService } from 'src/app/cart-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  public products : CartItem[] = []

  getTotal(){
    let sum:number = 0
    this.products.forEach(prod=>{
      sum+=prod.produto.preco * prod.unidade
    })
    return sum
  }

  private cartSub : Subscription

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProduct();
    this.cartSub = this.cartService.getProductUpdateListener().subscribe(
      (products)=>{
        this.products = products;
      }
    );
  }

  ngOnDestroy(): void{
    this.cartSub.unsubscribe();
  }

}
