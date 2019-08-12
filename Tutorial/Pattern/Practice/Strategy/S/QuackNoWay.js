var IQuackBehaviour = require('./IQuackBehaviour')

class QuackNoWay extends IQuackBehaviour{
    constructor(name){
        super();
        this.name = name;
    }
    quack(){
        console.log(`${this.name} can NOT quack`);
        return false;
    }

}
module.exports = QuackNoWay;