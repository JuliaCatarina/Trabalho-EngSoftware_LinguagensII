import { Produto } from 'src/app/produto.model';

export class CartItem {
    produto : Produto;
    unidade : number;

    constructor(produto, unidade){
        this.produto = produto;
        this.unidade = unidade;
    }
}
