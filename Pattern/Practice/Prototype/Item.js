const IClonable = require('./IClonable')
class Item { //extends IClonable{
    constructor(){
       // super();
        
    }
    clone(){
        let proto = Object.getPrototypeOf(this);
        let cloned = Object.create(proto); 
        cloned.myArray = [... this.myArray];
        return cloned;
    }
    cloneDeep(){

    }
}
module.exports = Item;
