var person = require('./Person');

class PersonBuilder {
    constructor(name){
        this.name = name;
    }
    makeEmployee(){
        this.employee = true;
        return this;
    }
    makeManager(hours = 40){
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    makePartTime (hours = 20){
        this.hours = hours;
        this.isParTime = true;
        return this;
    }
    withMoney(money = 0){
        this.money = money;
        return this;
    }
    withList(list = []){
        this.shoppingList - list;
        return this;
    }
    build(){
        return new person(this);
    }
}
module.exports = PersonBuilder;