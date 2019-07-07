// resolves is an attribute of Promise method that calls call back on chain
// Traditional format
function delay(seconds, callback){
    setTimeout(callback, seconds*1000);
};

delay (1, ()=>{
    console.log('one second');
})
console.log('end of first chunk');
// using promise class
