const ISubject = require('./ISubject');

class WeatherData extends ISubject{
    constructor(){
        super();
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.perssure = 0;
    }
    register(observer) {
        this.observers.push(observer);
    }

    remove(observer) {
        this.observers = [...this.observers.filter(element => element !== observer)];
    }
    notify() {
        this.observers.forEach(element => element.update(this.temperature, this.humidity, this.pressure));
    }
    setMeasurement(temperature, humidity, pressure){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notify();
    }
}
module.exports = WeatherData;