let myArray = [7, 12, 9, 4, 11]; // Step 1
let minVal = myArray[0];         // Step 1

for (let i = 0; i < myArray.length; i++) { // Step 2
    if (myArray[i] < minVal) {   // Step 3
        minVal = myArray[i];
    }
}

console.log('Lowest value: ', minVal); // Step 4
