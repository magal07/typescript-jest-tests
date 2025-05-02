/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se Φ(x) é uma propriegade demonstrável dos objetos x de tipo T. Então Φ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Simplificado: Subtipos precisam ser substituíveis por seus tipos de base.
Simplificando o simplificado: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de animal) deve servir como qualquer outro Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 29.9));
shoppingCart.addItem(new Product('Lápis', 9.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
