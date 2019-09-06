const myItem = require('./myItem');

let itemA = new myItem();
itemA.add('hello');
itemA.print();

let itemB = itemA.clone();
itemB.add('itemB');
itemB.print();
