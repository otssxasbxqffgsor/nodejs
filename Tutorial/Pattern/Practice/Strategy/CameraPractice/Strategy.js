const IStrategy = require('./IStrategy')
class Strategy extends IStrategy {

    constructor(strategy){
        super();
        this.strategy = strategy;
    }
}
module.exports = Strategy;