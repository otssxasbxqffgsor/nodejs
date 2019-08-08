var DarkRoast = require('./DarkRoast');
var Milk = require('./Mlik');
var myCoffee = new DarkRoast();
myCoffee = new Milk(myCoffee);
console.log(`Your ${myCoffee.getDescription()} costs ${myCoffee.cost()}`);
