var ICondimentDecorator = require('./ICondimentDecorator');

class WhipCreamCondiment extends ICondimentDecorator{
    constructor(beverage){
        super('Whip Cream Condiment');
        this.beverage = beverage;
        this.description = "Whip Cream Condiment";
    }
    getDescription(){
        return this.beverage.getDescription() + this.description;
    }
    // inherited from IBeverage
    cost(){
        return 0.25 + this.beverage.cost();
    }
}
module.exports = WhipCreamCondiment;