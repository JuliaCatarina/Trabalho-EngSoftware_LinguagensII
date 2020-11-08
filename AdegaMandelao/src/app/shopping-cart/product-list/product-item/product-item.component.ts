import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  constructor(private productService:ProductServiceService, private router:Router) { }

  @Input()
  produto : Produto;

  routeProduto(){
    this.router.navigateByUrl("/produto/"+this.produto._id);
    }
  
  adicionarProduto(produto){
    this.productService.addProduct(produto,1);
  }
  
  ngOnInit(): void { 
  }

}
