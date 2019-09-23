var PancakeMenu = require('./PancakeHouseMenu');
var DinnerMenu = require('./DinnerMenu');
var Waitress = require('./Waitress');


const pancakeMenu = new PancakeMenu();
const dinnerMenu = new DinnerMenu();
const waitress = new Waitress(pancakeMenu, dinnerMenu);

waitress.printMenu();