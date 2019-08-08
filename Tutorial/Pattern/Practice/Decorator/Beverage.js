class Beverage{
    constructor(description){
        this.description = description;
    }
    getDescription(){
        return this.description;
    }
    cost(){};
}

module.exports = Beverage;