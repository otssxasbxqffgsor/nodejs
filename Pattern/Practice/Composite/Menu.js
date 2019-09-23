class IMenu{
    constructor(description) {
        this.description = description || 'Unknown Description';
    }
    add(){}
    getDescription(){}
    print(){}
    total(){}

}

class Menu extends IMenu{
    constructor(description, menuItems) {
        super();
        this.menuItems = menuItems || [];
        this.description = description || 'Menu Main';
    }
    getDescription() {
        return this.description;
    }
    print(){
        this.menuItems.forEach(item => item.print());
    }
    total(){
       let total = 0;
       for (let i in this.menuItems){
           total += this.menuItems[i].total();
       }
       console.log(`${this.description} total is ${total}`);
       return total;
    }
    add(description, menuItems){
        this.description = description;
        if(Array.isArray(menuItems)){
        menuItems.forEach(item=>this.menuItems.push(item));
        } else {
            this.menuItems.push(menuItems);
        }
    }

}
module.exports = Menu;