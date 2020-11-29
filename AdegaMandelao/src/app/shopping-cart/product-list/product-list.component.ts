import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductServiceService } from 'src/app/product-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

  public products : Produto[] = []

  constructor(private productService:ProductServiceService, private route:ActivatedRoute) { }

  productSub : Subscription;

  ngOnInit(): void {
    this.route.queryParams.subscribe(param=>{
      if(param.categoria){
        this.products = this.productService.getProducts().filter( prod => {
          return prod.categoria === param.categoria // extraido da url
      });
     }
      else {
        this.products = this.productService.getProducts()
      }
    })

    this.productSub = this.productService.getProductsAsListener().subscribe(prods=>{this.products = prods});
  }
  ngOnDestroy() : void{
    this.productSub.unsubscribe();
  }
}