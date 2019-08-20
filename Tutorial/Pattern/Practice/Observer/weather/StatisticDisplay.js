const IObserver = require('./IObserver')
class StatisticDisplay extends IObserver {
    constructor(weatherData) {
        super();
        this.maxTemp = 0;
        this.minTemp = 0;
        this.tempSum = 0;
        this.numReadings = 0;
        this.weatherData = weatherData;
        weatherData.register(this);
    }
    update(temp, humidity, pressure) {
        this.tempSum += temp;
        this.numReadings++;

        if (temp > this.maxTemp) {
            this.maxTemp = temp;
        }

        if (temp < this.minTemp) {
            this.minTemp = temp;
        }

    }
    display() {
        console.log(`${this.description} was updated with ===> :${this.currentPressure} - last:${this.lastPressure}`);
        console.log(`Avg/Max/Min temperature = ${this.tempSum / this.numReadings} / ${this.maxTemp} / ${this.minTemp}`);
    }

}