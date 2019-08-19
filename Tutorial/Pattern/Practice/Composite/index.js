let Menu = require('./Menu');
let Item = require('./Item');


let MenuA = new Menu();
let MenuB = new Menu();

let itemA = new Item("shirt", 50);
let itemB = new Item("pants", 150);
MenuA.add('Menu First', [itemA ,itemB]);

MenuB.add("Menu B",MenuA);
MenuA.add("shows",new Item("shoes",200));
MenuA.add("Suit",new Item("Suit",2200));


MenuB.print();
console.log(MenuB.total());