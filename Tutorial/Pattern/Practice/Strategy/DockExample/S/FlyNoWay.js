var IFlyBehaviour = require('./IFlyBehaviour')

class FlyNoWay extends IFlyBehaviour{
    constructor(name){
        super();
        this.name = name;
    }
    fly(){
        console.log(`${this.name} can NOT fly`);
        return false;
    }
    getName(){return this.name;}
}
module.exports = FlyNoWay;