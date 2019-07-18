var items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19];

const quickSort = (dataset, first, last) =>{
    // TODO: break condition
    if(first < last){
        // TODO: pivotIndex
        let p = (partition(dataset, first, last));

        // TODO: run recurtion
        quickSort(dataset, first, p-1);
        quickSort(dataset, p+1, dataset.length);
    }
}
const partition = (datavalues, first, last) =>{
    // TODO: select pivot value
    let p = datavalues[0];
    // TODO: establish upper and lower bounds
    let low = first+1;
    let up = last;
    
    // TODO: setup a flag, breaking condition
    let flag = false;

    while(!flag){
        
        // TODO: goUp (Advance the lower index)
        while(low <= up && datavalues[low] <= p){
            low += 1;
        }

        // TODO: goDown (Retrive the upper index)
        while(up >= low && datavalues[up] >= p){
            up -= 1;
        }

        // TODO: if two index cross, we found the split point
        if (up < low){
            flag = true;
        } else {
            // TODO: We keep sorting
            let temp = datavalues[low];
            datavalues[low] = datavalues[up];
            datavalues[up] = temp;
        }

        // TODO: finally increase pivot point
        let temp = datavalues[first];
        datavalues[first] = datavalues[up];
        datavalues[up] = temp;

        // TODO: return the split or pivitol point
        return up;
    }
    

}
quickSort(items, 0, items.length-1);
console.log(items);