// class Person {
//     constructor (name='unamed person'){
//         this.name= 0;
//     }
//     toString(){
//         return JSON.stringify(this);
//     }
// }
// module.exports = Person;

class Person{
    constructor( name = 'unnamed person'){
        this.name = name;
        this.money = 0;
    }

    hasLeft(){
        return this.money >= 0 ? 
        `remaining is ositive value $${this.money}` :
         `Negative creadit of $${this.money}`;
    }
}
module.exports = Person;