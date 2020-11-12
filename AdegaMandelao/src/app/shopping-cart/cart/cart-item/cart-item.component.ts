import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/cart-item-model';
import { CartServiceService } from 'src/app/cart-service.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor(private cartService: CartServiceService) { }

  eraseProduct(){
    this.cartService.eraseCartItem(this.cartItem);
  }

  @Input() cartItem : CartItem;
  
  ngOnInit(): void {
  }

}
