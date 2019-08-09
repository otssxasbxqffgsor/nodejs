var Iterator = require("./Iterator");
class DinnerMenuIterator extends Iterator{
    constructor(menuItems = []){
        super();
        this.description = "Dinner Menu Iterator";
        this.menuItems = menuItems;
        this.prt = 0;

    }
    next(){
        if(this.menuItems.length > 0 && this.prt<this.menuItems.length)
        {
            var item = this.menuItems[this.prt];
            position +=1;
            return item;
        }
        return this.menuItems[this.prt];
    }
    hasNext(){
        return (this.prt < this.menuItems.length || 
            this.menuItems[this.prt] !== null)
    }
    remove(){
        if (this.prt>0){
            for (var prev = this.prt-1; i<this.menuItems.length; i++)
            {
                this.menuItems[prev] = this.menuItems[this.prt];
            }
        }
    }
    removeFilter(){
        return this.menuItems.filter((value, index, arr)=>{
            index !== this.position;
        })
    }
    removeSplice(){
        return this.menuItems.filter((value, index, array) =>{ 
            if(index === this.position)
            this.menuItems.splice(index, 1);
        });
    }

}