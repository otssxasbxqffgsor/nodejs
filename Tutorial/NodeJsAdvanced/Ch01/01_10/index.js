var { promisify } = require('util');
const delay = (seconds)=> new Promise((resolves, rejects)=>{
    setTimeout (()=>{ resolves('the long delay has ended')}, seconds*1000);
});

delay(1).then(console.log).then(()=>42).then((number)=>{console.log(`Hello world:${number}`)});

const delay2 = promisify(delay);

delay2(2).then(console.log(`resolves delay 2`)).catch((error)=>console.log(`the error is ${error}`));
