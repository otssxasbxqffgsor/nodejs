var Menu = require('./Menu');
class DinnerMenu extends Menu{
    constructor(){
        this.menuItems = [];
        this.menuItems.push("name", "description");
        this.menuItems.push("name", "description");
    }
    getMenuItems(){return this.menuItems;}
    createIterator(){return new DinnerMenuIterator(this.menuItems)};
}
module.exports = DinnerMenu;