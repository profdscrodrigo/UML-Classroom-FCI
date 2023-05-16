import { Request, Response } from 'express';
import { Product } from '../../models/ProductModel';

export async function deleteProductController(req: Request, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Product id is required'});
  }

  await Product.findByIdAndDelete(id);
  res.sendStatus(204);
}
