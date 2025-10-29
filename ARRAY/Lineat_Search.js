
function linear(arr, x) {
    for (let i=0; i< arr.length; i++) {
        if(arr[i] === x) return i;
    }
    return `${x} not_found`;
}

const arr = [2,3,4,10,40];
console.log(linear(arr, 10));
console.log(linear(arr, 9));
