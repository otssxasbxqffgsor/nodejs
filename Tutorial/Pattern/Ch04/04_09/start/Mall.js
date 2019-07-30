class Mall {

    constructor(name) {
        this.sales = [];
        this.name = name;
        this.subscribers = [];
    }
    subscribe(observer){
        this.subscribers.push(observer);
    }
    sale(discount){
        this.subscribers.forEach(observer =>{
            observer.notify(this.name, discount);
        })
    }
    notify(storeName, discount){
        console.log(`${this.name}, there is a sale at ${storeName}! ${discount}% off everything!`);
    }
}

module.exports = Mall;
