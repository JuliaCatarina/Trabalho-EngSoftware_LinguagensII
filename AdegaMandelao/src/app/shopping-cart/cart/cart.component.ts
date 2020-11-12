import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cartService:CartServiceService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.cartSub = this.cartService.getProductUpdateListener().subscribe(
      (products)=>{
        this.products = products;
      }
    );
  }

  checkOut(){
    this.router.navigateByUrl("/checkOut")
  }

  isEmpty(){
    return !this.cartService.isCartEmpty()
  }

  ngOnDestroy(): void{
    this.cartSub.unsubscribe();
  }

}
