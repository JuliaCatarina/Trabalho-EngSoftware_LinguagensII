import { Injectable, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';
import { CartServiceService } from 'src/app/cart-service.service';
import { HttpClient } from "@angular/common/http";
import { of, Subject, Subscription } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private productUpdated = new Subject<Produto[]>();

  public products : Produto[] = [];


  getProducts() {
    this.http
      .get<{ meta: {statusCode : number, message : string}, content: {produtos} }>("http://localhost:3000/api/produtos")
      .pipe(
        map(postData => {
          return postData.content.produtos.map(product => {
            return {
              _id: product.id,
              preco: product.preco,
              nome: product.nome,
              descricao: product.descricao,
              foto: product.foto,
              quantidade: product.quantidade,
              vendido: product.vendido,
              categoria_id: product.categoria_id,
            };
          });
        })
      )
      .subscribe(transformedPosts => {
        this.products = transformedPosts;
        console.log(transformedPosts);
        this.productUpdated.next([...this.products])
      });
  }

  getProdutoById(id){
    return this.http.get<{ meta: {statusCode : number, message : string}, content: {produto} }>("http://localhost:3000/api/produtos/"+id);
  }

  deleteProdutoById(id){
    this.http.delete("http://localhost:3000/api/produtos/"+id).subscribe(
      (res)=>{console.log(res)});
  }

  updateProducts(produtos){
    this.productUpdated.next(produtos);
    this.products = [...produtos];
  }

  getProductsUpdateListener(){
    return this.productUpdated.asObservable();
  }

  getProductsAsListener(){
    return this.productUpdated.asObservable();
  }

  getProduct(id:string){
    let prod = this.products.find(element=>{
      console.log(prod)
      return element._id === id;
    })
    if(prod){
      return of(prod);
    }
    else{
      return undefined;
    }
  }

  getToFilterProducts(){
    return this.products
  }

  constructor(private http: HttpClient, private cartService:CartServiceService) {
    this.getProducts()
  }

  addProduct(produto:Produto,unidade:number){
    this.cartService.postProduct(produto,unidade);
  }

}
