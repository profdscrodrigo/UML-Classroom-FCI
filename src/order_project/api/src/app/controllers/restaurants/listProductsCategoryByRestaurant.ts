import { Request, Response } from 'express';
import { Product } from '../../models/ProductModel';
import { Category } from '../../models/CategoryModel';
import { Restaurant } from '../../models/RestaurantModel';

export async function listProductsCategoryByRestaurant(req: Request, res: Response) {
  const { categoryId, restaurantCode } = req.params;

  const restaurant = await Restaurant.findOne({ code: restaurantCode });
  const category = await Category.findById(categoryId);

  if (!restaurant) {
    return res.status(404).json({ error: 'Restaurante not found' });
  }

  if (!category) {
    return res.status(404).json({ error: 'Category not found' });
  }

  const products = await Product.find({ category: category._id, restaurant: restaurant._id });

  res.json(products);

}
