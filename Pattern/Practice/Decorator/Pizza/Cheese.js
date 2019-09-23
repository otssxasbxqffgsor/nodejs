var ToppingDecorator = require('./ToppingDecorator');

class Cheese extends ToppingDecorator{
    constructor(pizza){
        super(pizza);
        this.pizza = pizza;
        this.description = 'Feta Cheese';
    }
    getDescription(){
        return `${this.pizza.getDescription()} with ${this.description}`;
    }
    cost(){
        return this.pizza.cost()+ 4.4 ;
    }
}
module.exports = Cheese;