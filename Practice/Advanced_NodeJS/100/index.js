const { Readable } = require('stream');

class StreamFromArray extends Readable{
    constructor(streamArray){
        super({ objectMode: true});
        this.streamArray = streamArray;
        this.index = 0;
    }
    _read(){
        if (this.index < this.streamArray.length){
            const chunk = {
                data: this.streamArray[this.index],
                index: this.index
            };
            this.push(chunk);
            this.index +=1 ;
        } else {
            this.push(null);
        }
    }
}

// Runtime
const peakStream = new StreamFromArray(["A","B","C","D","E"]);
peakStream.on('data', (chunk)=>console.log(chunk));
peakStream.on('end', ()=> console.log('done'));