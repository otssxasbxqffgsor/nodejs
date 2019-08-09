class Waitress{

    constructor(pancakeMenu, dinnerMenu){
        this.pancakeMenu = pancakeMenu;
        this.dinnerMenu = dinnerMenu;
    }
    /*
    The JavaScript for/of statement loops through the values of an iterable objects
    var cars = ['BMW', 'Volvo', 'Mini'];    
    var x;
    for (x of cars) {
        document.write(x + "<br >");
    }
    */
    printMenu(){

        var it = this.dinnerMenu.createIterator();
       
        while(it.hasNext()){
            this.printMenuItem(it.current());
            it.next();
        }
        // var pItems = this.pancakeMenu.getMenuItems();
        // for (item of pItems ){
        //     this.printMenuItem(item);
        // }
        // var dItems = this.dinnerMenu.getMenuItems();
        // for(var item of dItems){
        //     this.printMenuItem(item);
        // }
    };
    printMenuItem(menuItem){
        console.log(`$Name: ${menuItem.name}, Price ${menuItem.price}`);
    };
}
module.exports = Waitress;