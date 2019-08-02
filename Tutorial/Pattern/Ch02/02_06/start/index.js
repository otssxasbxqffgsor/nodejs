var userFactory = require('./UserFactory');

var shopperA = new userFactory('Alex Banks', 100,'shopper');
var employeeA = new userFactory('Eve Porcello', 50, 'employee');

// console.log(alex);
// console.log(alex);
shopperA.spend(100);
console.log(shopperA.hasLeft())

employeeA.earn(50);
console.log(employeeA.hasLeft());