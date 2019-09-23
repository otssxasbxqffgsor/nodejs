class IIterator{
    next(){}
    prev(){}
    current(){}
    first(){}
    hasNext(){}
}
class Iterator extends IIterator{
    constructor(items = []) {
        super();
        if (items.length<=0) process.exit();
        this.items = items;
        this.prt = 0;
    }

    current(){
        return this.items[this.prt];
    }
    first() {
        const [first] = this.items
        return first;
    }
    last(){
        return  [...this.items].reverse()[0];
    }
    next() {
        if (this.hasNext()) {
            this.prt += 1;
        }
        return this.current();
    }
    prev() {
        if(this.prt !== 0 ) {
            this.prt -= 1;
        }
        return this.current();
    }
    hasNext() {
        return (this.prt + 1 < this.items.length );
    }


}

module.exports = Iterator;