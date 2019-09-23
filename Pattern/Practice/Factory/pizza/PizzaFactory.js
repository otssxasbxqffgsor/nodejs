const PizzaClam = require('./PizzaClam');
const PizzaPepperoni = require('./PizzaPepperoni');
const PizzaVeggie = require('./PizzaVeggie');
class PizzaFactory{
    constructor(type){
        this.description = 'Pizza Factory';
        }
    createPizza(type){
            switch (type) {
                case 'clam':
                    return new PizzaClam();
                case 'pepperoni':
                    return new PizzaPepperoni();
                default:
                    return new PizzaVeggie();
            }
        }
}
module.exports = PizzaFactory;