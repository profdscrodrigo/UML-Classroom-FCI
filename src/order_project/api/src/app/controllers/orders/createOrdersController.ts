import { Request, Response } from 'express';
import { Order } from '../../models/OrderModel';
import { io } from '../../../index';

export async function createOrdersController(req: Request, res: Response) {
  const { table, products, restaurant } = req.body;

  console.log({ restaurant });

  const order = await Order.create({ table, products, restaurant });
  const orderDetails = await order.populate('products.product');

  io.emit('order@new', orderDetails);

  res.status(201).json(order);
}
