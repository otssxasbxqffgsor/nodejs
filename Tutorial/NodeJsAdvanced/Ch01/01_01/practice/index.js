// Actual function with call back method as paramter
function delay(seconds, callback) {
    setTimeout(callback, seconds*1000);
}

// this line will be called prior setTimeout
console.log('Starting delays chain method');
delay(2,()=>{
    console.log('two seconds');
    // adding a new delay chain
    delay(3,()=>{
        console.log('three');
        delay(4,()=>{
            console.log('four');
        });
    });
});

