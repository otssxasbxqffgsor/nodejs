class Shopper{
    constructor(name = 'unnamed person'){
        this._name = name;
        this._shoppingList = [];
    }
    get name(){
        return this._name;
    }
    get shoppingList(){
        return this._shoppingList.join(', ');
    }
    add(item){
        this._shoppingList.push(item);
    }

    deepClone(){
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        
        // adding further data 
        cloned._name = this.name;
        cloned._shoppingList = [...this._shoppingList];
        return cloned;

    }
    clone(){
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        
        // adding further data 
        cloned._name = this.name;
        cloned._shoppingList = [...this._shoppingList];

        return cloned;
    }
}
module.exports = Shopper;