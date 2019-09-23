var Store = require('./Store');
var inventory = require('./inventory');

var skiShop = new Store ('steep and deep', inventory);
var searchItem = 'ski googles';
var results = skiShop.find(searchItem);

console.log(results);