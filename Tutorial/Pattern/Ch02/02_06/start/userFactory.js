var Employee = require('./Employee');
var Shopper = require('./Shopper');

class UserFactory {
    constructor( name, money = 0, type) {
    if (type === 'employee'){
        return  new Employee(name);//.earn(money);
    } else{
        return  new Shopper(name)//.spend(money);
    }
    }
}
module.exports = UserFactory;