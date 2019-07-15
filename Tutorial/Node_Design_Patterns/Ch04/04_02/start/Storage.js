class Storage{
    constructor(name, inventory = [], dilveryTime = 0){
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
        this.next = null;
    }
    lookInLocalInventory(itemName){
        var index = this.inventory.map( item => item.name).indexOf(itemName);
        return this.inventory[index];
    }
    setNext(storage){
        this.next = storage;
    }
    find(itemName){
        var found = this.lookInLocalInventory(itemName);
        if (found){
            return{
                name: founud.name,
                qty: found.qty,
                localtion: this.name,
                deliveryTime: (this.deliveryTime === 0) ? 'now' : `${this.deliveryTime}`;
            };
        } else if (this.next){
            return this.next.find(itemName);
        } else {
            return `We do not carry ${itemName}`;
        }
    }
    
}