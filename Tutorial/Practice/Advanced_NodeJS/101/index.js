function delay (seconds, callback){
    setTimeout(callback, seconds*1000);
}

console.log('==');
delay(2,()=>{
    console.log('two seconds done');
})