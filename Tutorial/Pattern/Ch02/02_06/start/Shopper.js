// var Person = require('./Person')

// class Shopper extends Person {

//     constructor(name, money=0) {
//         super(name);
//         this.money = money;
//         this.employed = false;
//     }

// }

// module.exports = Shopper;

var Person = require('./Person');
class Shopper extends Person {
    
    constructor(name){
        super(name);
        this.employed = false;
    }
    spend(amount){
        this.money -= amount;
        console.log(`${this.name} 
            has spent $${amount} remaining is ${this.money}`);
    }
}
module.exports = Shopper;