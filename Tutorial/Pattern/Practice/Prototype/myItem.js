const Item = require('./Item');

class myItem extends Item{
    constructor(){
        super();
        this.myArray = ['BaseItem'];
       // this.item = this;
    }
    get(){
        return this.myArray;
    }
    add(item){
        this.myArray.push(item);
    }
    print(){
        this.myArray.forEach((item , index) => console.log(`i: ${index} - data: ${item} \n`));
    }
    // clone(){
    //     let proto = Object.getPrototypeOf(this);
    //     let cloned = Object.create(proto); 
    //     cloned.myArray = [... this.myArray];
    //     return cloned;
    // }
}
module.exports = myItem;