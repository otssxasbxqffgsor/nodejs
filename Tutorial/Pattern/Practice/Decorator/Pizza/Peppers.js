var ToppingDecorator = require('./ToppingDecorator');

class Peppers extends ToppingDecorator{
    constructor(pizza){
        super(pizza);
        this.pizza = pizza;
        this.description = 'Red peppers ';
    }
    getDescription(){
        return `${this.pizza.getDescription()} with ${this.description}`;
    }
    cost(){
        return this.pizza.cost() + 4.8;
    }
}
module.exports = Peppers;