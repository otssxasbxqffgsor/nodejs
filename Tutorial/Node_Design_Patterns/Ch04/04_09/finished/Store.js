class Store {

    constructor(name) {
        this.sales = [];
        this.name = name;
        this.subscribers = [];
    }
    notify(storeName, discounut){
        console.log(`${this.name}, there is sale at ${storeName}! ${discounut}% off everything!`);
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    sale(discount) {
        this.subscribers.forEach(observer => observer.notify(this.name, discount));
    }

}

module.exports = Store;
