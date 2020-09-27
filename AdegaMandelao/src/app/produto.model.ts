export class Produto{
    _id:string;
    preco:number;
    nome:string;
    descricao:string;
    foto:string;
    quantidade:number;
    vendido:number;


    constructor(_id, preco, nome, descricao, foto, quantidade, vendido){
        this._id = _id;
        this.preco = preco;
        this.nome = nome;
        this.descricao = descricao;
        this.foto =  foto;
        this.quantidade = quantidade;
        this.vendido = vendido;
    }
}
