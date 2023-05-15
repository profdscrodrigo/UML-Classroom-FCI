import {Request, Response} from 'express';
import { Category } from '../../models/CategoryModel';

export async function deleteCategoryController(req: Request, res: Response) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Category id is required'});
  }

  await Category.findByIdAndDelete(id);
  res.sendStatus(204);
}
