const PizzaFactory = require('./PizzaFactory');
const PizzaStore = require('./PizzaStore');

let factory = new PizzaFactory();
let store = new PizzaStore(factory);
let pizza = store.order("clam");
console.log(`==== Your Order Is: ${pizza.getName()} Ready ====`);
pizza.print();

pizza = store.order('pepperoni');
console.log(`==== Your Order Is: ${pizza.getName()} Ready ====`);
pizza.print();

pizza = store.order(null);
console.log(`==== Your Order Is: ${pizza.getName()} Ready ====`);
pizza.print();