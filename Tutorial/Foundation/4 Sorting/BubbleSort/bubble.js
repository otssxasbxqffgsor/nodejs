const bubbleSort = (data) =>{
    if (data !== undefined && data.length>1){
    for ( var i = 0; i<data.length; i++){
            
                for (var j = i; j < data.length; j ++){
                if(data[i] > data[j]){
                    let temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
             
            }
            // i+=1;
            j=0;
        }
    }
        return data;
    
}


let data = [5,4,3,2,1];
data.forEach(i =>{
    console.log(i);
})
data = bubbleSort(data);
data.forEach(i =>{
    console.log(i);
})