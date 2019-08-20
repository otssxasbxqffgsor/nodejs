var IObserver = require('./IObserver');
class SimpleObserver extends IObserver{
    constructor(simpleObserver){
        super();
    this.simpleObserver = simpleObserver;
    this.value = null;
    }
    update(value){
    this.value = value;
    }
    display(){
        console.log(`Value: ${this.value}`);
    }

}
module.exports = SimpleObserver;