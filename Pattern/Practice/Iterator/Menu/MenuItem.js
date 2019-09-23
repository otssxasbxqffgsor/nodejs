class MenuItem{
    constructor(name, description, vegeterian, price){
        this.name = name;
        this.description = description;
        this.vegeterian = vegeterian;
        this.price = price;
    }
    getName(){return this.name;}
    getDescription(){return this.description;}
    getVegeterian(){return this.vegeterian;}
    getPrice(){return this.price;}
}
module.exports = MenuItem;