import { Request, Response } from 'express';
import { Product } from '../../models/ProductModel';
import FormData from 'form-data';

export async function updateProductController(request: Request, response: Response) {
  const { id } = request.params;
  const { name, description, price, category } = request.body;
  const image = request.file?.filename;

  console.log({ name, description, price, category, image });

  const productExist = await Product.findById(id);

  if (!productExist) {
    response.status(404).json({ error: 'Product id not found' });
    return;
  }

  if (!name) {
    return response.status(400).json({ error: 'Name is required' });
  }

  if (!description) {
    return response.status(400).json({ error: 'Description is required' });
  }

  if (!image) {
    return response.status(400).json({ error: 'Image is required' });
  }

  if (!price) {
    return response.status(400).json({ error: 'Price is required' });
  }

  if (!category) {
    return response.status(400).json({ error: 'Category is required' });
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('image', image);
  formData.append('price', price);
  formData.append('category', category);

  try {
    const product = await Product.findOneAndUpdate({ _id: id }, {
      formData
    }, { new: true });

    response.status(201).json(product);
  } catch (error) {
    response.status(500).json({ error: 'Failed to update product' });
  }
}
