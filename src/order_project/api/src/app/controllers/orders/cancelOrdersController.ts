import {Request, Response} from 'express';
import {Order} from '../../models/OrderModel';

export async function cancelOrdersController(req: Request, res: Response) {
  const { orderId } = req.params;

  if (!orderId) {
    return res.status(400).json({ error: 'Order is required'});
  }

  await Order.findByIdAndDelete(orderId);
  res.sendStatus(204);
}
