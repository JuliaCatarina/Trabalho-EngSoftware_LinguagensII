export class Produto{
    _id:string;
    preco:number;
    nome:string;
    descricao:string;
    foto:string;
    quantidade:number;
    vendido:number;
    categoria_id:string;
    createdAt:string;
    updatedAt:string;


    constructor(_id, preco, nome, descricao, foto, quantidade, vendido, categoria_id, createdAt, updatedAt){
        this._id = _id;
        this.preco = preco;
        this.nome = nome;
        this.descricao = descricao;
        this.foto =  foto;
        this.quantidade = quantidade;
        this.vendido = vendido;
        this.categoria_id = categoria_id;
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}
