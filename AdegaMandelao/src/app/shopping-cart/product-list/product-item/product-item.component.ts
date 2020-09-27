import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  dogeProduto = new Produto("1",50,"Doge de óculos. wow.","Doge","https://i.pinimg.com/236x/55/54/01/5554015289d6345c8ad5a47c8aa764d6.jpg",20,553)

  constructor(private cartService:CartServiceService) { }

  private produto: Produto;

  addProduct(){
    this.cartService.postProduct(this.produto);
  }
  

  ngOnInit(): void { 
  }

}
