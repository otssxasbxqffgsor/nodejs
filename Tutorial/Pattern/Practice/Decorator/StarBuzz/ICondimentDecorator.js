var IBeverage = require('./IBeverage');
class ICondimentDecorator extends IBeverage{
    constructor(driverCondimentDescription){
        super();
        this.description = driverCondimentDescription || 'Uknown Condiment Decorator';
    }
    getDescription(){};
}

module.exports = ICondimentDecorator;