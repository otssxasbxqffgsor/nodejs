var DecafBeverage = require('./DecafeBeverage');
var WhipeCreamCondiment = require('./WhipCreamCondiment');
var decafe = new DecafBeverage();
decafe = new WhipeCreamCondiment(decafe);
console.log(`Your order ${decafe.getDescription()} is $${decafe.cost()}`);