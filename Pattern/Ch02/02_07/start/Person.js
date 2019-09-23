class Person {
    constructor(name, isEmployer = false, isManager = false, hours = 40, shoppingList =[]){
        this.name = name;
        this.isEmployer = isEmployer;
        this.isManager = isManagerl
        this.hours = hours; 
        this.money = money;
        this.shoppingList = shoppingList;
    }
    toString(){
        return JSON.stringify(this);
    }
}
module.exports = Person;