import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public products : Produto[] = []

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
