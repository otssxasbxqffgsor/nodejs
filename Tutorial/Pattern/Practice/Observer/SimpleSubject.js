var ISubject = require('./ISubject');

class SimpleSubject extends ISubject{
    constructor(){
        super();
        this.observers = [];
        this.value = 0;
    }
    register(observers){
        this.observers.push(observers);
    }
    remove(observers){
        this.observers = [...this.observers.filter(Element => Element !== observers)];
    }
    notify(){
        this.observers.forEach(element => {
            element.update(this.value);
        });
    }
    setValue(value){
        this.value = value;
        this.notify();
    }
}
module.exports = SimpleSubject;