var Store = require('./Store');
var Shopper = require('./Shopper');
var Mall = require('./Mall');

var storeA = new Store('Btore A');
var storeB = new Store('Store B');

var shopperA = new Shopper('Shopper A');
var shopperB = new Shopper('Shopper B');

var mallA = new Mall('Mall A');
var mallB = new Mall('Mall B');

storeA.subscribe(shopperA);
storeA.subscribe(shopperB);
storeA.subscribe(mallA);
storeA.subscribe(mallB);

storeB.subscribe(shopperA);
storeB.subscribe(shopperB);
storeB.subscribe(mallA);
storeB.subscribe(mallB);

storeA.sale(20);
storeB.sale(20);

console.log(mallA.sales);
console.log(mallB.sales);