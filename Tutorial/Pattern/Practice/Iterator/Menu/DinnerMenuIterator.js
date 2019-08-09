var Iterator = require("./Iterator");
class DinnerMenuIterator extends Iterator{
    constructor(menuItems = []){
        super();
        this.description = "Dinner Menu Iterator";
        this.menuItems = menuItems;
        this.prt = 0;

    }
    next(){
        // if(this.menuItems.length !== 0 && this.prt<this.menuItems.length)
        // {
        //     // var item = this.menuItems[this.prt];
            this.prt +=1;
            // return this.current();
        // }
        // return this.menuItems[0];
    }
    hasNext(){
        return (this.prt < this.menuItems.length || 
            this.menuItems[this.prt] !== undefined)
    }
    current(){
        return this.menuItems[this.prt];
    }
    last(){
        return this.menuItems[this.menuItems.length-1];
    }
    first(){
        return this.menuItems[first];
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
module.exports = DinnerMenuIterator;