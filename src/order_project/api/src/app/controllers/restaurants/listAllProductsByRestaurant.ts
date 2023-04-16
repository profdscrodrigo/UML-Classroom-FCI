import { Request, Response } from 'express';
import { Product } from '../../models/ProductModel';
import { Restaurant } from '../../models/RestaurantModel';

export async function listAllProductsByRestaurantController(req: Request, res: Response) {
  const { restaurantCode } = req.params;

  if (!restaurantCode) {
    return res.status(400).json({ error: 'Restaurant code is required'});
  }

  const restaurant = await Restaurant.findOne({ code: restaurantCode });

  if (!restaurant) {
    return res.status(404).json({ error: 'Restaurante não encontrado' });
  }

  const products = await Product.find({ restaurant: restaurant._id });

  res.json(products);
}
