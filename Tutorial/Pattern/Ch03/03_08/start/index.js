var shopper = require('./Shopper');
var item = require ('./Item');

var goldenItem = require('./GoldenItem');
var diamondItem = require('./DiamondItem');

var items = []
var shoppers = [];
shoppers.push (new shopper('kian', 1000));
items.push(new item('itemA', 30));
items.push(new item('itemB', 40));

items.push(new goldenItem('golderItemA', 1000));
items.push(new diamondItem('diamondA', 200000));

// console.log(items);
// console.log(shoppers);
let kian = shoppers.filter(element => element.name.toLowerCase() === 'kian')[0];
let diamon = items.filter(element => element.name.toLowerCase() === 'diamonda')[0];
console.log(diamon);
console.log(kian.purchase);
if (kian && diamon){
  kian.printStatus();
  kian.purchase(diamon);
  kian.printStatus();
}


