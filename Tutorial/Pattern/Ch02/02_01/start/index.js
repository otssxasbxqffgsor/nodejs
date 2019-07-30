var shopper = require('./Shopper');
var store = require('./Store');
var Logger = require('./Logger');
var logger = new Logger();
logger.log('starting app...');

var shopperA = new shopper('shopper A', 500);
var storeA = new store('store A',[
    {
        item: 'Ski',
        qty: 5,
        price:500
    },
    {
        item:'hats',
        qty: 20,
        price:5
    }
]);

logger.log('finish config');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`${log.message}`));