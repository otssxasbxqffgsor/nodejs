var IFlyBehaviour = require('./IFlyBehaviour');

class FalyWithWings extends IFlyBehaviour{
    constructor(name){
        super(name);
        this.name = name;
    }
    fly(){
        console.log(`${this.name} can fly`);
        return true;
    }
    getName (){
        return this.name;
    }
    
}
module.exports = FalyWithWings;