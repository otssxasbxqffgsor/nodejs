var Shopper = require('./Shopper');
var {InventoryItem, 
    GolenInventoryItem, 
    DiamonInventoryItem
}= require('./InventoryItem');

var alex = new Shopper('Alex', 100);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_necklace = new GolenInventoryItem(necklace);
var diamond_gold_necklace = new DiamonInventoryItem(gold_necklace);
var diamond_walkman = new DiamonInventoryItem(walkman);

alex.purchase(necklace);
alex.purchase(walkman);

alex.printStatus();
