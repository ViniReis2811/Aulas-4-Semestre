import {Router, Request, Response} from 'express';
import { listProduct } from '../controller/productController';

export const productRouter = Router();

productRouter.get('/', async (_req: Request, res: Response) => {
  const products = await listProduct();

  res.json(products)
});
