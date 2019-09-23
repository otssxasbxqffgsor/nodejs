class IDock{

    constructor(name = null, flyBehaviour = null, quackBehaviour = null ){
        this.name = name;
        this.flyBehaviour = flyBehaviour;
        this.quackBehaviour = quackBehaviour;
    }
    setflyBehaviour(flyBehaviour){
        this.flyBehaviour = flyBehaviour;
    }
    setQuackBehaviour(quackBehaviour){
        this.quackBehaviour = quackBehaviour;
    }
    display(){};
    performFly(){
        this.flyBehaviour.fly();
    }
    performQuack(){
        this.quackBehaviour.quack();
    }
    swim(){
        console.log(`All dock float, even devoys!`);
    }



}
module.exports = IDock;