import {Request, Response} from 'express';
import { Category } from '../../models/CategoryModel';

export async function updateCategoryController(request: Request, response: Response){
  const { id } = request.params;
  const { name, icon } = request.body;

  const categoryExist = await Category.findById(id);

  if(!categoryExist) {
    response.status(404).json({ error: 'Category id not found' });
  }

  if(!name) {
    return response.status(400).json({ error: 'Name is required' });
  }

  if(!icon) {
    return response.status(400).json({ error: 'Icon is required' });
  }

  const category = await Category.findByIdAndUpdate(id, { name, icon }, { new: true });

  return response.json(category);
}
