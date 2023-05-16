import { Request, Response } from 'express';
import { Order } from '../../models/OrderModel';

export async function createOrdersController(req: Request, res: Response) {
  const { table, products } = req.body;

  const order = await Order.create({ table, products });
  const orderDetails = await order.populate('products.product');

  res.status(201).json(order);
}
