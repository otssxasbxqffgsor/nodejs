class Person {
    constructor (name='unamed person'){
        this.name= 0;
    }
    toString(){
        return JSON.stringify(this);
    }
}
module.exports = Person;