class Catalog{
    constructor(name, composite = []){
        this.name = name;
        this.composite = composite;
    }

    get total(){
        return this.composite.reduce((total, nextItem)=>{
            total + nextItem.total
        },0);
    }

    print(){
        console.log(`\n${this.name.toUpperCase()}`);
        this.composite.forEach(item => item.print());
    }
}

module.exports = Catalog;