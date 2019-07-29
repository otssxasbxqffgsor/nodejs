var Item = require('./Item');

class DiamondItem extends Item { 
    
    constructor(name, price){
        super(name, price);
        this.name = name;
        this.price = 2200000 * price;

    }

}
module.exports = DiamondItem;