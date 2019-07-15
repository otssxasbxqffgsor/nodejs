var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

var group_food = new CatalogGroup('Food for while you try on clothes',
    new CatalogItem('milkshake', 5.99),
    new CatalogItem('French fries', 3.99)
);

var keyChain = new CatalogItem('key chain', .99);
var catalog = new CatalogGroup(
    'clothes and food', [keyChain, group_shoes, group_food]
);

console.log(`${catalog.total}`);

catalog.print();