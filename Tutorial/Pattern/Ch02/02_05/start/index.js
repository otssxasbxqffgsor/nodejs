var shoppperCloned = require('./ShopperCloned');

var shopperA = new shoppperCloned('Kian').clone();
// shopperA.name = 'kian'
shopperA.add("kian item A");

var shopperB = new shoppperCloned('Rad').deepClone();
shopperB.add('rad item b');

console.log(`${shopperA.name}: ${shopperA.shoppingList}`);
console.log(`${shopperB.name} : ${shopperB.shoppingList}`);