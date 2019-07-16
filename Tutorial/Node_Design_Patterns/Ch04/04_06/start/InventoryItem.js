class InventoryItem {
    constructor(name, price){
        this.name;
        this.price;
    }
    writeLn(){
        process.stdout.write(`${this.name}: $${this.price}`);
    }
}

module.exports = InventoryItem;