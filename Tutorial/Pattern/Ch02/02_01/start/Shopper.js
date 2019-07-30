var Logger = require('./Logger');



class Shopper {
    constructor(name, money = 0){
        this.name = name; 
        this.money = money;
        this.logger.log(`New Shopper: ${name} had ${money} in their account`);
    }

    get logger(){
        return new Logger();
    }
    
}
module.exports = Shopper;