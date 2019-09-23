function delay (seconds, callback){
    setTimeout(callback, seconds*1000);
}

console.log('== START == ');
delay(2,()=>{
    console.log('call back  two seconds ');
    delay(1, ()=>{
        console.log('call back  three seconds');
        delay(1,()=>{
            console.log('call back  four seconds')
        })
    })
})
console.log('== END ==')