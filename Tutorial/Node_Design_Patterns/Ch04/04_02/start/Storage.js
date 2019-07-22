class Storage {

    constructor(name, inventory=[], deliveryTime){
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
        this.next = null;
    }
    lookInLocalInventory(itemName){
        // The map() method creates a new array with the results of calling a provided function on every element in the calling array.
        var arrayOfNamesOnly = this.inventory.map(item => item.name);
        console.log(arrayOfNamesOnly);
        // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        var index = arrayOfNamesOnly.indexOf(itemName);
        // console.log(this.inventory); 
       return this.inventory[index];
    }
    setNext (storge){
        this.next = storge;
    }
    find(itemName){
        var found = this.lookInLocalInventory(itemName);
        if(found){
            return {
                name: found.name, 
                qty: found.qty,
                localtion: this.name,
                deliveryTime: (this.deliveryTime === 0) ? 'now': `${this.deliveryTime} day(s)`
            }
        } else if(this.next){
            return this.next.find(this.next);
        } else{
            return 'not found';
        }
        
    }
}
module.exports = Storage;