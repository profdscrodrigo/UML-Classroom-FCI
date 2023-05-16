import { Restaurant } from '../../models/RestaurantModel';
import {Request, Response} from 'express';
import { Product } from '../../models/ProductModel';

export async function listProductsByRestaurantController(req: Request, res: Response) {
  const { code } = req.params;

  if (!code) {
    return res.status(400).json({ error: 'Restaurant code is required'});
  }

  const restaurant = await Restaurant.findOne({ code });
  const restaurantId = restaurant?._id;

  const products = await Product.find().where('restaurant').equals(restaurantId).populate('restaurant').populate('category').populate('restaurant');

  res.json({
    products,
    code,
  });
}
