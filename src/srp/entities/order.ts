import { OrderStatus } from './interfaces/order-status';
import type { Messaging } from '../services/messaging';
import type { Persistency } from '../services/persistency';
import type { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Car item, empty.');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your request with total of ${this.cart.total()} has been received`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
