var Strogage = require('./Storage');

class Store {
    constructor(name, inventory = []){
        this.name = name;

        var floor = new Stroage ('store floor', inventory.floor);
        var backroom = new Strogage ('store backroom', inventory.backroom);
        var localStore = new Store('nearby store', inventory.localStore);
        var warehouse = new Strogage('warehourse', inventory.warehouse, 5);

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;
    }

    find(itemName){
        return this.storage.find(itemName);
    }
}