import {Request, Response} from 'express';
import {Product} from '../../models/ProductModel';

export async function listProductsController(req: Request, res: Response) {
  const products = await Product.find().populate('restaurant');
  res.json(products);
}
