import { OrderStatus } from './interfaces/order-status';
import type { CustomerOrder } from './interfaces/customer-protocol';
import type { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import type { MessagingProtocol } from './interfaces/messaging-protocol';
import type { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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
      `Your request with total of ${this.cart.totalWithDiscount()} has been received`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'This customer is: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
