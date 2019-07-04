var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds*1000);
});

delay(3)
  .then(console.log)
  .then(() => 10)
  .then((number) => console.log(`Hello world: ${number}`))

console.log('end first tick');
