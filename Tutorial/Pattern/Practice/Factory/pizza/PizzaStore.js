class PizzaStore {
    constructor(factory) {
        this.description = 'Pizza Store';
        this.factory = factory;
        this.pizza = null;
    }
    order(pizzaType){
        this.pizza = this.factory.createPizza(pizzaType);
        this.pizza.prepare();
        this.pizza.bake();
        this.pizza.cut();
        this.pizza.box();

        return this.pizza;
    }

}
module.exports = PizzaStore;