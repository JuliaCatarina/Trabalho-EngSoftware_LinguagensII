import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  price:number = 50
  nome:string = "Doge de óculos. wow."

  ngOnInit(): void {
  }

}
