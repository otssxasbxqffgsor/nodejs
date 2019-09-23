var catalog = require('./Catalog');
var item  = require('./item');

var itemA = new item('Boots', 10);
var itemB = new item('Short', 12);
var itemC = new item('Jacket', 40);
var catalog = new catalog('Catalog a',[itemA, itemB, itemC]);

console.log(`$${catalog.total}`);
catalog.print();