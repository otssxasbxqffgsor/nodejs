
const fs = require('fs');
const readStream = fs.createReadStream('../avlmdb/AVLMb001p53.sql');
const writeStream = fs.createWriteStream("./AVLM001p5.sql");
readStream.pipe(writeStream);

readStream.on('data' , (callback)=>{console.log(`data event -> ${callback} \n`)});
readStream.on('close', (callback)=>{ setTimeout(
    ()=>{
        console.log(`close event -> ${callback} \n`)
    }, 
    2000
)});
readStream.on('open' , (callback)=>{console.log(`open event -> ${callback} \n`)});
