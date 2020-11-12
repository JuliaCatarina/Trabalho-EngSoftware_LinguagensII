import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';
import { CartItem } from 'src/app/cart-item-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-out-produtos',
  templateUrl: './check-out-produtos.component.html',
  styleUrls: ['./check-out-produtos.component.css']
})

export class CheckOutProdutosComponent implements OnInit {

  constructor(private cartService:CartServiceService) { }

  public cartItems : CartItem[] = []

  private cartSub : Subscription

  getTotal(){
    let sum:number = 0
    this.cartItems.forEach(prod=>{
      sum+=prod.produto.preco * prod.unidade
    })
    return sum
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getProducts();
    this.cartSub = this.cartService.getProductUpdateListener().subscribe(
      (products)=>{
        this.cartItems = products;
      }
    );
  }
}
