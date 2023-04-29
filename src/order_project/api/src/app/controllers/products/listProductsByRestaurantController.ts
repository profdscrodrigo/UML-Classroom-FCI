import { Restaurant } from '../../models/RestaurantModel';
import {Request, Response} from 'express';
import { Product } from '../../models/ProductModel';

export async function listProductsByRestaurantController(req: Request, res: Response) {
  const {restaurantCode} = req.params;

  if (!restaurantCode) {
    return res.status(400).json({ error: 'Restaurant code is required'});
  }

  const restaurant = await Restaurant.findOne({ restaurantCode });
  const restaurantId = restaurant?._id;

  const products = await Product.find().where('restaurant').equals(restaurantId).populate('restaurant').populate('category').populate('restaurant');

  res.json({
    products,
    code: restaurantCode,
  });
}
