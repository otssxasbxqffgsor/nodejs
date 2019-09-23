var Logger = require('./Logger');


class Store{
    constructor( name, inventory = []){
        this.name = name;
        this.inventory = inventory;
        this.logger.log(`New Store: ${name} has ${inventory.length}`);
    }
    get logger(){return new Logger();}
}
module.exports = Store;