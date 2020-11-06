import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  constructor(private cartService:CartServiceService) { }

  @Input()
  product : Produto;
  
  //addProduct(){
  //  this.cartService.postProduct(this.product);
  //}
  
  ngOnInit(): void { 
  }

}
