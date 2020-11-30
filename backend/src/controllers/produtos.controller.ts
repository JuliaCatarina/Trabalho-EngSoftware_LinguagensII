import { NextFunction, Request, Response } from "express"
import { Produto } from "../models/produto.model"


export const getAllProdutos = (req: Request, res: Response, next: NextFunction) => {
    Produto.findAll().then(produtos=>{
        return res.status(200).json({
            meta : {
                statusCode : 200,
                message : "Get All Succesfull",
            },
            content : {
                produtos,
            }
        })
    })
}

export const getProduto = (req: Request, res: Response, next: NextFunction) => {
    Produto.findByPk(+req.params.id).then(produto=>{
        if(produto){
            return res.status(200).json({
                meta : {
                    statusCode : 200,
                    message : "Get Succesfull",
                },
                content : {
                    produto,
                }
            })
        }
        else{
                    return res.status(404).json({
            meta : {
                statusCode : 404,
                message : "Product not found",
            },
        }
        )
        }
    }
    ,reason=>{
        return res.status(400).json({
            meta:{
                statusCode: 418,
                message: "418 I'm a teapot",
                reason,
            }
        })
    })
}
export const postProduto = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body.foto)
    const produto : Produto = req.body;
    Produto.create(produto,
    {
        fields: ["preco", "descricao", "nome", "foto", "quantidade", "categoria_id"]
    }).then(_produto=>{
        if(_produto){
            return res.status(200).json({
                meta:{
                    statusCode:200,
                    message: "Update Sucessful",
                },
                produto: _produto,
            })
        }
    }, reason =>{
        return res.status(400).json({
            meta:{
                statusCode:400,
                message: "Error",
                reason
            }
        })
    }
    )
}
export const putProduto = (req: Request, res: Response, next: NextFunction) => {
    //update
    Produto.update({
        preco!: +req.params.preco,
        descricao!: req.params.descricao,
        nome!: req.params.nome,
        foto!: req.params.foto,  
        quantidade!: +req.params.quantidade,
        categoria_id!: +req.params.categoria_id,
    }, {where:{
        id : +req.params.id,
    }}
    ).then(produto=>{
        if (produto) {
            return res.status(200).json({
                meta:{
                    statusCode:200,
                    message: "Update Sucessful",
                },
                produto : Produto,
            })
        }
    })
}
export const deleteProduto = (req: Request, res: Response, next: NextFunction) => {
        Produto.destroy({where:{
            id : +req.params.id
    }}).then((produto)=>{
        if (produto){
            return res.status(200).json({
                meta:{
                    statusCode:200,
                    message: "Delete Sucessful",
                },
                produto : Produto,
            })
        }
        else{
            return res.status(400).json({
                meta:{
                    statusCode:400,
                    message: "Delete non-Sucessful",
                },
                produto : "Product is with something wrong.",
            })
        }
    }, reason => {
        return res.status(400).json({
            meta:{
                statusCode:400,
                message: "Error",
                reason
            }
        })
    }
    )
    //delete
}