import {Request, Response} from 'express';
import {Product} from '../../models/ProductModel';

export async function listProductsByCategoryController(req: Request, res: Response) {
  const { categoryId } = req.params;

  if (!categoryId) {
    return res.status(400).json({ error: 'Category is required'});
  }

  const product = await Product.find().where('category').equals(categoryId);

  if (!categoryId) {
    return res.status(400).json({ error: 'Product not found'});
  }

  res.json(product);
}
