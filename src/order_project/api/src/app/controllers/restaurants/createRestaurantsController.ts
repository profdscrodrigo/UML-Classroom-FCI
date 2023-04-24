import { Restaurant } from '../../models/RestaurantModel';
import { Request, Response } from 'express';

export async function createRestaurantsController(req: Request, res: Response) {
  const { name, code } = req.body;

  const restaurant = await Restaurant.create({
    name,
    code
  });

  res.status(201).json(restaurant);
}
