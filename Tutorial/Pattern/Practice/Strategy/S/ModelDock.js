var QuackYesWay = require('./QuackYesWay');
var FalyWithWings = require('./FalyWithWings');
var IDock = require('./IDock');

class ModelDock extends IDock{
    constructor(name){
    super(name||'ModelDock', new FalyWithWings('ModelDock'),new QuackYesWay('ModelDock') )
    }
    display(){
        console.log(`${this.name} flyBehaviour = ${this.flyBehaviour.fly()}, quackBehaviour = ${this.quackBehaviour.quack()}`);
    }
}
module.exports = ModelDock;