import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private productService : ProductServiceService) { }



  ngOnInit(): void {
  }

  minimum : number = 0;
  maximum : number = 20;

  filterByPrice(minimum,maximum){
    let products = this.productService.getProducts().filter(prods=>{
      if(prods.preco>= minimum && prods.preco <= maximum){
        return prods
      }
    })
    this.productService.updateProducts(products);
  }
}
