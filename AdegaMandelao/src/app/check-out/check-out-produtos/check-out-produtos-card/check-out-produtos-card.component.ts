import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart-item-model';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-check-out-produtos-card',
  templateUrl: './check-out-produtos-card.component.html',
  styleUrls: ['./check-out-produtos-card.component.css']
})
export class CheckOutProdutosCardComponent implements OnInit {

  constructor( private cartService : CartServiceService ) { }

  getTotal(){
    return this.cartItem.produto.preco * this.cartItem.unidade;
  }

  eraseProduct(){
    this.cartService.eraseCartItem(this.cartItem);
  }

  @Input() cartItem : CartItem;
  
  ngOnInit(): void {
  }
}
