const IObserver = require('./IObserver');

class CurrentDisplay extends IObserver{
    constructor(weatherData) {
        super();
        this.description = 'Current Display';
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = 0;
        this.weatherData = weatherData;
        this.weatherData.register(this);
    }
    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`${this.description} was updated with ===> : ${this.temperature}C degrees and ${this.humidity} % humidity`);
    }
}
module.exports = CurrentDisplay;