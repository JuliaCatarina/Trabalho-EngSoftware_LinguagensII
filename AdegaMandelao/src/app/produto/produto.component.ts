import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Produto } from '../produto.model';
import { switchMap } from "rxjs/operators" ;
import { of } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private authService: AuthService,private productService:ProductServiceService, private route:ActivatedRoute) { }

  adicionarProduto(unidade:number){
    this.productService.addProduct(this.produto,+unidade);
  }

  produto:Produto
  isLoading:boolean = true

  excluirProduto(){
    console.log("Produto "+ this.produto.nome +" excluido");
    console.log(this.produto._id)
    this.productService.deleteProdutoById(this.produto._id)
  }




  loggedIn(){
    return this.authService.isLoggedIn()
  }

  ngOnInit(): void {
    this.isLoading = true
    let prod = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get("id");
        return this.productService.getProdutoById(id);
      })
    )
    prod.subscribe(p=>{
      console.log(p.content)
      this.produto = p.content.produto;
      this.produto._id = p.content.produto.id;
      this.isLoading=false;
    })
  }

}
