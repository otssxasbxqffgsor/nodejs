var CondimentDecorator = require('./CondimentDecorator');

class Milk extends CondimentDecorator{
    constructor(beverage){
        super(beverage);
        this.beverage = beverage;
    }
    getDescription(){
        return this.beverage.getDescription() + ', Milk';
    }
    cost(){
        return .10 + this.beverage.cost();
    }
}
module.exports = Milk;