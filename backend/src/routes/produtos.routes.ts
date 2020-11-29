import { Router } from 'express';
import { getPackedSettings } from 'http2';
import { getAllProdutos,getProduto,postProduto,putProduto,deleteProduto } from '../controllers/produtos.controller';

const router = Router();

router.get("/", getAllProdutos);

router.get("/:id", getProduto);

router.post("/", postProduto);

router.put("/:id", putProduto)

router.delete("/:id", deleteProduto);


export {router as produtosRoutes}