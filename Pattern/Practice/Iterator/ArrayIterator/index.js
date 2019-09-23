const Item = require('./Item');
const Iterator  = require('./Iterator');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

const iterator = new Iterator([
    new Item("itemA",1),
    new Item("itemB",2),
    new Item("itemC",3),
    new Item("itemD",4),
    new Item("itemE",5),
    new Item("itemF",6),
    new Item("itemD",7)
]);

process.stdin.on('keypress', (str, key) => {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch (key.name) {
        case 'right':
            iterator.next().display();
            break;
        case 'left':
            iterator.prev().display();
            break;
        case 'down':
            iterator.last().display();
            break;
        case 'up':
            iterator.first().display();
            break;
        case 'c' :
            if (key.ctrl) {
                process.exit()
            }
    }

});