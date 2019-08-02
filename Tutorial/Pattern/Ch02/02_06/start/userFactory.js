var Employee = require('./Employee');
var Shopper = require('./Shopper');

class UserFactory {
    constructor( name, type) {
    if (type === 'employee'){
        return  new Employee(name);
    } else{
        return  new Shopper(name)
    }
    }
}
module.exports = UserFactory;