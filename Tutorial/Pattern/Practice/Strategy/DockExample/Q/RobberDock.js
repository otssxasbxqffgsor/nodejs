var IDock = require('./IDock')
class RobberDock extends IDock{

    constructor(name){
        super();
        this.name = name;
    }
    display(){
        console.log(`   ${this.name} dock can following:
                        swim:${this.swim()},
                        fly:${this.fly()},
                        quack:${this.quack()}`);
    };
    fly (){return false;};
    swim () { return true};
    quack(){ return false;}
}
module.exports = RobberDock;