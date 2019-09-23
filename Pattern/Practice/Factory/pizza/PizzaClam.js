const Pizza = require('./Pizza');
class PizzaClam extends Pizza{
    constructor() {
        super();
        this.name = 'Clam Pizza';
        this.dough = 'Crust';
        this.sauce = 'Mariana sauce';
        this.addTopping("Shared Mozzarella");
        this.addTopping("Granted Parmesan");
        this.addTopping("Sliced Mushroom");
    }

}
module.exports = PizzaClam;