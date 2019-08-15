var IBeverage = require('./IBeverage');
class DecafeBeverage extends IBeverage{
    constructor(){
        super('Decafe');
    }
    cost(){
        return 2.32;
    }
}
module.exports = DecafeBeverage;

module.exports = DecafeBeverage;