function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

let num = +prompt('enter a number: ');
console.log(`Factoraial of  ${num} is ${factorial(num)}`);