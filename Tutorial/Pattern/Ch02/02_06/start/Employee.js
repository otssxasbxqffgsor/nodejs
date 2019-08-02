// var Shopper = require('./Shopper');

// class Employee extends Person {
//     constructor (name, money = 0, employer = ''){
//         super(name, money);
//         this.employer  = employer; 
//         this.employed = true;
//     }
//     payDay(money = 0){
//         this.money += money;
//     }
// }
// module.exports = Employee;

var Person = require('./Person');
class Employee extends Person{
    constructor(name){
        super(name);
        this.isEmployee = true;
    }
    earn(amount){
        this.money += amount;
        return (`${this.name} has added ${amount} remaining is ${this.money}.`)
    }
}
module.exports = Employee;