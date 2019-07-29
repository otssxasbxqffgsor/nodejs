var Item = require('./Item');

class GoldenItem extends Item { 
    
    constructor(name, price){
        super(name, price);
        this.name = name;
        this.price = 1000 * price;

    }

}
module.exports = GoldenItem;