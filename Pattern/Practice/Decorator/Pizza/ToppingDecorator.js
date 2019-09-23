var Pizza = require ('./Pizza');

class ToppingDecorator extends Pizza{
    constructor(){
        super();
    }
    getDescription(){}
}
module.exports = ToppingDecorator;