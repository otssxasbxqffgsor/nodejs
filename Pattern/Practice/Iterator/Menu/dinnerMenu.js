var DinnerMenuIterator = require('./DinnerMenuIterator');
var Menu = require('./Menu');
class DinnerMenu extends Menu {
    constructor(){
        super();
        this.menuItems = [
            {name:"Salad", price: 10},
            {name:"Pizza", price: 20}
            ];
    }
    getMenuItems(){return this.menuItems;}
    createIterator(){return new DinnerMenuIterator(this.menuItems)};
}
module.exports = DinnerMenu;