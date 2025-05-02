/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de impleme ntações.
Abstrações não devem depender de detalhes. Detalhes devem depender de Abstrações
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '50.523.333/00001-23',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 29.9));
shoppingCart.addItem(new Product('Lápis', 9.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
