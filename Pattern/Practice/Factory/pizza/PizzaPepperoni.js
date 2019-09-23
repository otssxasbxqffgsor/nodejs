const Pizza = require('./Pizza')
class PizzaPepperoni extends Pizza{
    constructor() {
        super();
        this.name = 'Pepperoni Pizza';
        this.dough = 'Crust';
        this.sauce = 'Greek Sauce';
        this.addTopping('olives');
        this.addTopping('feta');
        this.addTopping('parmezan');
    }
}
module.exports = PizzaPepperoni;