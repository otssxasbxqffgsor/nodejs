// n = base, x = powr 
const pwr = (n, x) =>{
    
    // @TODO: breaking point    
    if (x === 0){
        return 1;
    } else{
        // return pwr
        return n * (pwr(n, x-1));
    }
}
const fol = (n) =>{

    // @TODO: breaking condition
    if (n === 0){
        return 1;
    } else {
        return n * fol(n-1);
    }

}

console.log(pwr(2,4));
console.log(fol(4));