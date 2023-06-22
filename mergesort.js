const merge = (array, left, mid, right) => {
    let i = left, j = mid + 1;
    let newArray = [];
    while(i <= mid && j <= right) {
        if(array[i] >= array[j]){
            newArray.push(array[j++]);  
        }
        if(array[j] >= array[i]){
            newArray.push(array[i++]);
        }
    }
    for (; i <= mid; i++){
        newArray.push(array[i]);
    }
    for(; j <= right; j++) {
        newArray.push(array[j]);
    }
    let idx = 0;
    for(let k = left; k <= right; k++) {
        array[k] = newArray[idx++];
    }
}
const mergeSort = (array, left = 0, right = array.length -1) => {
    if(left < right) {
        let mid = Math.floor((left + right)/2);
        mergeSort(array, left, mid);
        mergeSort(array, mid + 1, right);
        merge(array,left, mid, right)
    }
    return array;
}
console.log(mergeSort([4, 3, 5, 23, 0, 3, 65, 82, 45]))
console.log(mergeSort([5, 4, 3, 2, 1, 0]));