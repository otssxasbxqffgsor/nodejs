var signleton = require('./Signleton');
// var Shopper = require('./Shopper');
// var Store = require('./Store');

// var singleToneInstance = new signleton();
var logger = signleton.getInstance();
console.log(logger);
logger.log('starting app...');

// var alex = new Shopper('alex', 500)
// var ski_shop = new Store('Steep and Deep Supplies', [
//     {
//         item: 'Downhill Skis',
//         qty: 5,
//         price: 750
//     },
//     {
//         item: 'Knit Hat',
//         qty: 20,
//         price: 5
//     }
// ])

// logger.log('finished config...');

// console.log(`${logger.count} logs total`);
// logger.logs.map(log => console.log(`   ${log.message}`));
