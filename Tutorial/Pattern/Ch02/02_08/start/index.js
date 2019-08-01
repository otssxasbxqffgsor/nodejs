var personBuilder = require('./PersonBuilder');

const employeeA = new personBuilder('employeeA')
                    .makeEmployee()
                    .makeManager()
                    .build();
const shopperA = new personBuilder('shopperA')
                    .withMoney(500)
                    .makePartTime()
                    .build();

console.log(employeeA);
console.log(shopperA);