var IFlyBehaviour = require('./IFlyBehaviour');

class FlyRocketPowered extends IFlyBehaviour{
    constructor(name){
        super();
        this.name = name;
    }
    fly(){
        console.log(`${this.name} can fly`);
        return true;
    }
    getName(){return this.name;}
}
module.exports = FlyRocketPowered;