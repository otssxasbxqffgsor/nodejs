var delay = (seconds) => new Promise((resolves, rejects) => {

    setTimeout(() => {
        resolves("{'(2*2)':'37'} ONLY ONE OBJECT RETURNS"); //> There can be only a single result or an error
        resolves(2,'kian'); //> This is how resolve changes state attribute the second attribute wont pass by... 
        
    }, seconds);
});
console.log('START RUNNER');
delay(1)
    .then( //--> this is the definition of callback function
        result => console.log(result), // doesn't run
        error => console.log(error) // shows "Error: Whoops!" after 1 second
    )
    .catch((error) => console.log(`error: ${error.message}`));

console.log('END RUNNER');


/*
There can be only a single result or an error
The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored:



let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
The idea is that a job done by the executor may have only one result or an error.

Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.
*/