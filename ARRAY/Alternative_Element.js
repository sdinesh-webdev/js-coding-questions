function getAlternates(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 2) {
    res.push(arr[i]);
  }
  return res;
}

// Example usage:
const arr = [10, 20, 30, 40, 50];
console.log(getAlternates(arr)); // [10, 30, 50]

