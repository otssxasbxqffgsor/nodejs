var Beverage = require('./Beverage');

class DarkRoast extends Beverage{
    constructor(){
        super();
        this.description = 'Dark Roast Coffee';
    }
    cost(){
        return .99;
    }
}
module.exports = DarkRoast;