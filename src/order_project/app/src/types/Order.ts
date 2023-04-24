import { Product } from './product';

export interface Order {
  _id: string;
  table: number;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: [
    {
      product: Product;
      quantity: number;
      _id: string
    }
  ];
  createdAt: Date;
}
