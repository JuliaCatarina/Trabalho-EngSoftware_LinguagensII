import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public products : Produto[] = []

  constructor(private productService:ProductServiceService, private route:ActivatedRoute) { }


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

}
}