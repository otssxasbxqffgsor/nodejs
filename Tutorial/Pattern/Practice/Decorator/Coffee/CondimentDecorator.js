const Beverage = require('./Beverage');

class CondimentDecorator extends Beverage{
    constructor(beverage){
        super(beverage);
        this.beverage = beverage;
    }
    
    getDescription(){

    };
}

module.exports = CondimentDecorator;