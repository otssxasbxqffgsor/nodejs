let delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
      //  resolves('the long delay has ended')
        rejects('Rejecting ... ');
    }, seconds);
});

console.log('start');

delay(1)
    .then(console.log)
    .then(()=> 42)
    .then((number) => console.log(`hello world: ${number}`))  
    .catch((err)=>{
        console.log(` === CATCH === \n ${err} \n`);
      }).finally(()=>{
        console.log('=== FINALLY === \n');
      })

    console.log('end')