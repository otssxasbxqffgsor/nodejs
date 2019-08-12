var IQuackBehaviour = require('./IQuackBehaviour');

class QuackYesWay extends IQuackBehaviour{
    constructor(name){
        super();
        this.name = name;
    }
    quack(){
        console.log(`${this.name} can quack`);
        return true;
    }

}
module.exports = QuackYesWay;