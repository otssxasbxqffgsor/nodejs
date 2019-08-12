var IDock= require('./IDock');
class DecoyDock extends IDock{
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
    fly (){return true;};
    swim () { return true};
    quack(){ return true;}
}
module.exports = DecoyDock;