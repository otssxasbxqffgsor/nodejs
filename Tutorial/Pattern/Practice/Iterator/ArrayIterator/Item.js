
class IItem{
    display(){};
}

class Item extends IItem{

    constructor(name, price){
        super();
        this.name = name;
        this.price = price;
    }
    display() {
        // super.display();
        console.log(`Item ${this.name} priced at ${this.price}`);
    }

}
module.exports = Item;