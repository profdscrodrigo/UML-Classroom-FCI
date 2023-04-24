import { Restaurant } from '../../models/RestaurantModel';
import {Request, Response} from 'express';

export async function listRestaurantsController(req: Request, res: Response) {
  const products = await Restaurant.find();

  res.json(products);
}
