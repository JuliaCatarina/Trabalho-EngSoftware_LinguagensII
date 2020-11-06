import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/cart-item-model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  @Input()
  cartItem : CartItem;
  


  ngOnInit(): void {
  }

}
