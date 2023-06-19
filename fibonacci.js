function fibs(number) {
    let array = [];
    array.push(0);
    if( number === 0) return array;
    array.push(1);
    if( number === 1 ) return array;
    for (let i = 2; i < number; i++){
        array.push(array[i-1] + array[i-2]);
    }
    return array;
}

const fibsRec = (number, array = [0,1]) => {
    if(array.length >= number) {
        return array.slice(0, number);
    }
    const sum = array.at(-1) + array.at(-2);
    array.push(sum);
    return fibsRec(number, array);
}

console.log(fibs(8));

console.log(fibsRec(8));