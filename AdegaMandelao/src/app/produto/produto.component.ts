import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Produto } from '../produto.model';
import { switchMap } from "rxjs/operators" ;
import { of } from 'rxjs';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private productService:ProductServiceService, private route:ActivatedRoute) { }

  adicionarProduto(unidade:number){
    this.productService.addProduct(this.produto,+unidade);
  }

  produto:Produto

  ngOnInit(): void {
    let prod = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get("id");
        return this.productService.getProduct(id);
      })
    )
    prod.subscribe(p=>{
      console.log(p)
      this.produto = p
    })
  }

}