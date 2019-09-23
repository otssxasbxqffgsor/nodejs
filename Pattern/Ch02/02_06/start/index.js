var userFactory = require('./UserFactory');

var shopperA = new userFactory('Alex Banks','shopper');
var employeeA = new userFactory('Eve Porcello','employee');

shopperA.spend(100);
console.log(shopperA.hasLeft())

employeeA.earn(50);
console.log(employeeA.hasLeft());