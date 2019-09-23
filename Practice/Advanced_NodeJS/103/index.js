var delay = (seconds) => new Promise((resolves, rejects)=>{

    if(seconds > 3) {
        rejects ( new Error(`${seconds} too long ... `));
    }
    else {
        setTimeout(()=>{
            // set it to true
            resolves('=== RESOLVED ===');
        }, seconds *1000);
    }
});
delay(2)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((error) => console.log(`CATCH: ${error.message}`));

console.log('end first tick');