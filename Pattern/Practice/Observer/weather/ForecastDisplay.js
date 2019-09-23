const IObserver = require('./IObserver');

class ForecastDisplay extends IObserver {
    constructor(weatherData) {
        super();
        this.weatherData = weatherData;
        this.description = 'Forecast Display';
        this.currentPressure = 29.92;
        this.lastPressure = 0;
        this.weatherData.register(this);
    }
    update(temperature, humidity, pressure) {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }
    display() {
        console.log(`${this.description} was updated with ===> :${this.currentPressure} - last:${this.lastPressure}`);
    }

}
module.exports = ForecastDisplay;