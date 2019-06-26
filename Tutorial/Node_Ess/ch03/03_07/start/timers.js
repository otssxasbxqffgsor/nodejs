const waitTime = 3000;

const waiteInterval = 500;
let currentTime = 0;
const incTime = ()=>{
    currentTime += waiteInterval;
    const p = Math.floor((currentTime/waitTime) + 100);
};
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
clearInterval(interval);
    console.log("done");
};

const interval = setInterval(incTime, waiteInterval);
setTimeout(timerFinished, waitTime);
