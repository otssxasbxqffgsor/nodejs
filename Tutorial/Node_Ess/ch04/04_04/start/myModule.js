let count = 0;
const inc = function (){
    ++count;
};
const dec = ()=> --count;
const getCount = ()=> count;

module.exports = {
inc, 
dec,
getCount
};