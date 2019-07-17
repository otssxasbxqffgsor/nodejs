const countDown = (x) =>{
console.log('started' + x);
    // TODO: add breaking condition
    if (x=== 0){
        console.log(`Done x = ${x}`);
    }
    else {
        console.log(`${x} calling self ${countDown(x-1)}`);
    }
console.log('EndOfLoop');
}
countDown(5);