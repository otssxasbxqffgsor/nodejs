const mergeSort = (data = []) =>{

    // TODO: Stop condition
    while (data.length >1 && data !== 'undefied'){
    // TODO: Select left and right array
    let midd = parseInt(data.length / 2); console.log(`midd is ${midd}`);
    let rD = data.slice(midd, data.length);// ? data[midd+1] : [];
    let lD = data.slice(0, midd);// ? data[midd-1] : [];
console.log(rD);
console.log(lD);
    // TODO: break array recursively 
    mergeSort(rD);
    mergeSort(lD);

    // TODO: 
    let i =0; 
    let j=0;
    let k=0;
    // run this at each stack of data 
    while(i<lD.length && j<rD.length){
        if (lD[i] < rD[j]){
            data[k]=lD[i]; i +=1;
        }else{
            data[k] = rD[j]; j+=1;
        }
        k+=1;

    }
    // one side of the search is finished so go and copy the rest into the end of the array because this is a sorted array by recurtion
    while(i<lD.length){
        data[k]=lD[i]; i+=1; k+=1;
    }
    while(j<rD.length){
        data[k] = rD[j]; j+=1; k+=1;
    }
    return data;
}

    
}
let data = [1,8,7,6,5,4,3,2,9,3,6,4,7,8,4,5,2,6,8,97,4,3];
// console.log(data);
data = mergeSort(data);
console.log(data);
// data.forEach(i=>console.log(i));

