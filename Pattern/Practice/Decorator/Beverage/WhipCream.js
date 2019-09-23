const Condiment = require('./Condiment');

class WhipCream extends Condiment{
    constructor(beverage){
        super();
        this.beverage = beverage;
    }
    description(){
        return this.beverage.description() + ' + Whipcream';
    }
    cost (){
        return this.beverage.cost() + 0.4;
    }
}
module.exports = WhipCream;