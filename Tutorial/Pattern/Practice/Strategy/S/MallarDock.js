
var QuackNoWay = require('./QuackNoWay');
var FlyNoWay = require('./FlyNoWay');
var IDock = require('./IDock');
class MallarDock extends IDock{
    constructor(name){
        super(name ||'MallerDock', new FlyNoWay('MallerDock'), new QuackNoWay('MallerDock'));
    }
    display(){
        console.log(`${this.name} flyBehaviour = ${this.flyBehaviour.fly()}, quackBehaviour = ${this.quackBehaviour.quack()}`);
    }

}
module.exports = MallarDock;