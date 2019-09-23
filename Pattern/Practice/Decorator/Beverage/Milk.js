const Condiment = require('./Condiment');

class Milk extends Condiment{
    constructor(beverage){
        super();
        // this.description = 'Mlik';
        this.beverage = beverage;
    }
    description(){
        return this.beverage.description() + ' + Mlik';
    }
    cost(){
        return this.beverage.cost() + .10;
    }
}
module.exports = Milk;