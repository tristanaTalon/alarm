import { OrderI } from '../table/order-i';

export interface ItemOrderI {
  order: OrderI;

  columns: string[];
}
