const Pizza = require('./Pizza')
class PizzaVeggie extends Pizza{
    constructor(){
        super();
        this.name = 'Veggie Pizza';
        this.dough = 'Thin Crust';
        this.sauce = 'Tomato Sauce';
        this.addTopping('sliced mushroom');
        this.addTopping('sliced pepper');
        this.addTopping('sliced onion');
    }
}
module.exports = PizzaVeggie;