var delay = (seconds) => new Promise((resolves, rejects) => {
  if (seconds > 3)  {
    rejects(new Error(` ${Error} is too long`));
  }

  setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds);
});

delay(2)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((error)=> console.log(`erros: ${error}`));

console.log('end first tick');
