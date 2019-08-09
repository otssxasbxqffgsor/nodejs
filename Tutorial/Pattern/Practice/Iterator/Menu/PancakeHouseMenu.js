var Menu = require('./Menu');
class PancakeHouseMenu extends Menu{
    constructor(menuItems = []){
        super();
        this.menuItems = menuItems;
    }
    addItem(name, price){
        this.menuItems.push(name, price);
    }
    getMenuItems(){
        return this.menuItems;
    }
    createIterator(){
        return new PancakeMenuIterator (this.menuItems);
    }
}
module.exports = PancakeHouseMenu;