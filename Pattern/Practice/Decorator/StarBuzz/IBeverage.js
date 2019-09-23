class IBeverage{
    constructor(drivernBeverage){
        this.description = drivernBeverage || 'Uknonw Beverage';
    }
    getDescription(){
        return this.description;
    }
    cost(){};
}
module.exports = IBeverage;