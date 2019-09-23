class IItem {
    constructor() {
    }

    getDescription(){}
    add(){}
    total(){}
    print(){}
}
class Item extends IItem{
    constructor(description, price) {
        super();
        this.description = description || 'Item';
        this.price = price || 0;
    }
    getDescription() {
        return this.description();
    }
    total(){
        return this.price;
    }
    print() {
        console.log(`${this.description} values at $${this.price}`);
    }
    add(description, price){
        this.description = description;
        this.price = price;
    }
}
module.exports = Item;