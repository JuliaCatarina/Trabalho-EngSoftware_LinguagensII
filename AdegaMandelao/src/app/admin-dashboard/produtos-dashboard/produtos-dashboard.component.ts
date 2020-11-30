import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/product-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-produtos-dashboard',
  templateUrl: './produtos-dashboard.component.html',
  styleUrls: ['./produtos-dashboard.component.css']
})

export class ProdutosDashboardComponent implements OnInit {

  public products : Produto[] = []

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.getToFilterProducts();
  }

}
