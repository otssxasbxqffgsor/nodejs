class Pizza{
    constructor() {
        this.name = null;
        this.dough = null;
        this.sauce = null;
        this.toppings = [];
    }
    addTopping(topping){
        this.toppings.push(topping);
    }
    getName(){
        return this.name;
    }
    prepare(){
        console.log(`${this.name} is being prepared!`);
    }
    bake(){
        console.log(`${this.name} is being baked!`);
    }
    cut(){
        console.log(`${this.name} is being cut!`);
    }
    box(){
        console.log(`${this.name} is being boxed!`);
    }
    print(){
        console.log(`${this.name} contains dough: ${this.dough}, sauce: ${this.sauce}`);
        this.toppings.forEach(item=>{console.log(`with topping: ${item}`)})
    }


}
module.exports = Pizza;