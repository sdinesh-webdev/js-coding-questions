let myArray = [7, 12, 9, 4, 11];

let maxValue = myArray[0];
let minValue = myArray[0];

for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] < minValue) {
        minValue = myArray[i];
    }
    if (myArray[i] > maxValue) {
        maxValue = myArray[i];
    }
} 

console.log('Minimum value: ', minValue);
console.log('Maximum value: ', maxValue);