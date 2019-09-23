var pizza = require('./Pizza');
var pepper = require('./Peppers');
var olives = require('./Olives');
var cheese = require('./Cheese');
var thinkPizza = require('./ThikPizza');

var greekPizza = new thinkPizza();
greekPizza = new cheese(greekPizza);
greekPizza = new olives(greekPizza);
greekPizza = new pepper(greekPizza);

console.log(`${greekPizza.getDescription()} is ready, costs ${greekPizza.cost()} `);