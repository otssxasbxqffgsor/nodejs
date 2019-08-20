const WeatherData = require('./WeatherData');
const CurrentDisplay = require('./CurrentDisplay');
const StatisticDisplay = require('./StatisticDisplay');
const ForecastDisplay = require('./ForecastDisplay');

let weatherData = new WeatherData();

let currentDisplay = new CurrentDisplay(weatherData);
let forecastDisplay = new ForecastDisplay(weatherData);

weatherData.setMeasurement(80, 65, 30.4);
weatherData.setMeasurement(73, 90, 29.4);
weatherData.setMeasurement(87, 30, 28.4);