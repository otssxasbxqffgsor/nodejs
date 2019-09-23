let delay = (seconds, callBack) =>{ //-> run on B
        setTimeout(callBack, seconds); 
}

function callBack(){ //--> this is function passed as value
    console.log('END CALLBACK');
}
// runtime
delay(2000, callBack); //--> this occures on B 
console.log('END RUNTIME');//--> this occures on A

/*
yvr-co-lqi:102 kian$ node .
END RUNTIME
END CALLBACK
yvr-co-lqi:102 kian$ 
*/