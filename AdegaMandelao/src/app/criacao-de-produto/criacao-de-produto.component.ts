import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Produto } from '../produto.model';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-criacao-de-produto',
  templateUrl: './criacao-de-produto.component.html',
  styleUrls: ['./criacao-de-produto.component.css']
})



export class CriacaoDeProdutoComponent {

  constructor(private productService:ProductServiceService, private http: HttpClient ) { }

  produto:Produto
  selectedFile : File = null;
  imagePath : string = null;

  formProduto = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.maxLength(35)]),
    preco: new FormControl('',[Validators.required]),
    quantidade: new FormControl('',[Validators.required]),
    foto: new FormControl('', {validators : [Validators.required]}),
    categoria_id: new FormControl('Selecione a Categoria',[Validators.required]),
    descricao: new FormControl('',[Validators.maxLength(500)]),
  })

  handleNewProduto() {
    if(this.formProduto.valid){
      this.onUpload();
    }
    else{
      console.log("Campos requiridos faltando.")
    }
  }

  onFileSelected(event: Event){
    this.selectedFile = event.target["files"][0];
    this.formProduto.patchValue({foto: this.selectedFile.name})
  }

  onUpload(){
    let a = {...this.formProduto.value}
    console.log(this.selectedFile);
    console.log(this.formProduto.value);
    this.http.post('http://localhost:3000/api/produtos', a)
        .subscribe(res => {
          console.log(res);
        })
  }

}
