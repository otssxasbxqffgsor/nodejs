var Menu = require('./Menu');
class PancakeHouseMenu extends Menu{
    constructor(){
        super();
        this.menuItems = [];
        this.menuItems.push("name", "description");
        this.menuItems.push("name", "description");

    }
    getMenuItems(){
        return this.menuItems;
    }
    createIterator(){
        return new PancakeMenuIterator (this.menuItems);
    }
}
module.exports = PancakeHouseMenu;