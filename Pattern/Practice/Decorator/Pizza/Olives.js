var ToppingDecorator = require('./ToppingDecorator');

class Olives extends ToppingDecorator{
    constructor(pizza){
        super(pizza);
        this.pizza = pizza;
        this.description = 'Kalamata Olives';
    }
    getDescription(){
        return `${this.pizza.getDescription()} with ${this.description}`;
    }
    cost(){
        return this.pizza.cost() + 3.5;
    }
}

module.exports = Olives;