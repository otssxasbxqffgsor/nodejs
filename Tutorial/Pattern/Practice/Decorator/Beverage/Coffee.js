const DarkRoast = require('./DarkRoast');
const Milk = require('./Milk');
const WhipCream = require('./WhipCream');

let order = new DarkRoast();
order = new Milk(order);
order = new WhipCream(order);
console.log(`--
Your Order[${order.description()}]
Total Cost[ ${JSON.stringify(order.cost())}]
--`)